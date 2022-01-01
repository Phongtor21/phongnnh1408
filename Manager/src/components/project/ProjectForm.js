import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Stack, Card, Typography, TextField, FormHelperText, Alert } from '@mui/material';
import { LoadingButton, MobileDatePicker } from '@mui/lab';
import { FormikProvider, Form, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useConfirm } from 'material-ui-confirm';

// apis
import projectApi from '../../apis/projectApi';
// hooks
import useSnackbar from '../../hooks/useSnackbar';
// slices
import { insertSuccess, editSuccess, restoreSuccess } from '../../redux/slices/project';
// upload
import { UploadSingleFile, UploadMultipleFile } from '../upload';
// editor
import QuillEditor from '../editor/quill';
// utils
import { createProjectSchema } from '../../utils/yupSchemas';
import { fDate } from '../../utils/formatDate';
// path
import { PATH_DASHBOARD } from '../../routes/path';
// 
import ProjectInCharge from './ProjectInCharge';

const propTypes = {
    isEdit: PropTypes.bool,
    project: PropTypes.object
};

const ProjectForm = ({ isEdit, project }) => {
    const [completionTime, setCompletionTime] = useState(project ? new Date(project.completionTime) : new Date());
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const confirm = useConfirm();
    const { setSnackbar } = useSnackbar();
    const descriptionRef = useRef(null);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: project?.name || '',
            images: project?.images || [],
            logo: project?.logo || null,
            position: project?.position || '',
            architectId: project?.architectId || null,
            // subtitle: project?.subtitle || '',
            description: project?.description || '',
        },
        validationSchema: createProjectSchema,
        onSubmit: async (values, { resetForm }) => {
            const { name, images, logo, position, architectId, description } = values;
            // const { name, images, architectId, subtitle, description } = values;
            var formData = new FormData();
            formData.append('name', name);
            images.forEach(image => {
                if (typeof image === 'string') {
                    formData.append('imagesString', image);
                } else {
                    formData.append('images', image);
                }
            });
            formData.append('logo', logo.file);
            formData.append('position', position);
            formData.append('completionTime', completionTime.toISOString());
            formData.append('architectId', architectId);
            // formData.append('subtitle', subtitle);
            formData.append('description', description);
            if (isEdit) {
                try {
                    const res = await projectApi.edit(project._id, formData);
                    if (res.statusText === 'info') {
                        await confirm({
                            title: res.message,
                            content: <Alert severity={res.statusText}>Đổi một tiêu đề mới hoặc khôi phục ngay</Alert>
                        });
                        const restore = await projectApi.restoreById(res.project._id);
                        res.message = restore.message;
                        dispatch(restoreSuccess(res.project));
                    }
                    if (res.statusText === 'success') {
                        dispatch(editSuccess(res.project));
                    }
                    setSnackbar({
                        isOpen: true,
                        type: res.statusText,
                        message: res.message,
                        anchor: 'bottom-center'
                    });
                    navigate(PATH_DASHBOARD.project.list);
                } catch (error) {
                    console.log(error);
                }
            } else {
                try {
                    const res = await projectApi.insert(formData);
                    if (res.statusText === 'info') {
                        await confirm({
                            title: res.message,
                            content: <Alert severity={res.statusText}>Bạn có muốn khôi phục không?</Alert>
                        });
                        const restore = await projectApi.restoreById(res.project._id);
                        res.message = restore.message;
                        dispatch(restoreSuccess(res.project));
                    }
                    if (res.statusText === 'success') {
                        dispatch(insertSuccess(res.project));
                    }
                    setSnackbar({
                        isOpen: true,
                        type: res.statusText,
                        message: res.message,
                        anchor: 'bottom-center'
                    });
                    resetForm();
                } catch (error) {
                    console.log(error);
                }
            }
        }
    });
    const { values, setFieldValue, getFieldProps, isSubmitting, touched, errors } = formik;
    const handleDropSingle = acceptedFiles => {
        const file = acceptedFiles[0];
        if (file) {
            setFieldValue('logo', {
                file,
                preview: URL.createObjectURL(file)
            });
        }
    };
    const handleDropMultiple = acceptedFiles => {
        const files = acceptedFiles.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file)
            })
        );
        setFieldValue('images', files);
    };
    const handleSelect = architect => {
        setFieldValue('architectId', architect?._id || null);
    };
    const handleRemoveAll = () => {
        setFieldValue('images', []);
    };

    const handleRemove = file => {
        const filteredFiles = values.images.filter(_file => _file !== file);
        setFieldValue('images', filteredFiles);
    };
    const handleChange = value => {
        // Debounce
        if (descriptionRef.current) clearTimeout(descriptionRef.current);
        descriptionRef.current = setTimeout(() => {
            setFieldValue('description', value);
        }, 500);
    };
    const handleSelectTime = newTime => {
        setCompletionTime(newTime);
    };
    return (
        <FormikProvider value={formik}>
            <Form>
                {isEdit && project && <Typography variant='caption'>Cập nhật lần cuối: {fDate(project.updatedAt)}</Typography>}
                <Grid container spacing={3} mt={1}>
                    <Grid item xs={12} md={4}>
                        <Stack spacing={2}>
                            <div>
                                <Typography variant='subtitle2'>Hình ảnh dự án</Typography>
                                <Card sx={{ py: 10, px: 2 }}>
                                    <UploadMultipleFile
                                        accept='image/*'
                                        files={values.images}
                                        maxSize={3145728}
                                        showPreview
                                        onDrop={handleDropMultiple}
                                        onRemove={handleRemove}
                                        onRemoveAll={handleRemoveAll}
                                    />
                                    <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                                        {Boolean(touched.images && errors.images) && errors.images}
                                    </FormHelperText>
                                </Card>
                            </div>
                            <div>
                                <Typography variant='subtitle2'>Logo dự án</Typography>
                                <Card sx={{ py: 10, px: 3 }}>
                                    <UploadSingleFile
                                        accept='image/*'
                                        file={values.logo}
                                        maxSize={1048576}
                                        error={Boolean(touched.logo && errors.logo)}
                                        onDrop={handleDropSingle}
                                        caption={
                                            <Typography
                                                variant='caption'
                                                sx={{
                                                    my: 2,
                                                    mx: 'auto',
                                                    display: 'block',
                                                    textAlign: 'center',
                                                    color: 'text.secondary'
                                                }}
                                            >
                                                Chỉ *.jpeg, *.jpg, *.png, *.gif
                                                <br />Tối đa 1MB
                                            </Typography>
                                        }
                                    />
                                    <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                                        {Boolean(touched.logo && errors.logo) && errors.logo}
                                    </FormHelperText>
                                </Card>
                            </div>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Card sx={{ p: 3 }}>
                            <Stack spacing={3}>
                                <TextField
                                    fullWidth
                                    label='Tên dự án'
                                    {...getFieldProps('name')}
                                    error={Boolean(touched.name && errors.name)}
                                    helperText={touched.name && errors.name}
                                />
                                {/* <TextField
                                    fullWidth
                                    label='Tiêu đề phụ'
                                    {...getFieldProps('subtitle')}
                                    error={Boolean(touched.subtitle && errors.subtitle)}
                                    helperText={touched.subtitle && errors.subtitle}
                                /> */}
                                <Stack direction='row' spacing={2}>
                                    <TextField
                                        fullWidth
                                        label='Vị trí'
                                        {...getFieldProps('position')}
                                        error={Boolean(touched.position && errors.position)}
                                        helperText={touched.position && errors.position}
                                    />
                                    <MobileDatePicker
                                        label='Thời gian hoàn thành'
                                        inputFormat='MM/dd/yyyy'
                                        value={completionTime}
                                        onChange={handleSelectTime}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Stack>
                                <div>
                                    <Typography variant='subtitle2'>Kiến trúc sư phụ trách</Typography>
                                    <ProjectInCharge architectId={values.architectId} handleSelect={handleSelect} />
                                    <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                                        {Boolean(touched.architectId && errors.architectId) && errors.architectId}
                                    </FormHelperText>
                                </div>
                                <div>
                                    <Typography variant='subtitle2'>Mô tả dự án</Typography>
                                    <QuillEditor
                                        id='project-description'
                                        value={values.description}
                                        onChange={handleChange}
                                    />
                                </div>
                                <Stack alignItems='end'>
                                    <LoadingButton type='submit' variant='contained' loading={isSubmitting}>
                                        {isEdit ? 'Lưu' : 'Thêm'}
                                    </LoadingButton>
                                </Stack>
                            </Stack>
                        </Card>
                    </Grid>
                </Grid>
            </Form>
        </FormikProvider>
    );
};

ProjectForm.propTypes = propTypes;

export default ProjectForm;
