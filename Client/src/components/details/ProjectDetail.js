import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SlideProject from "./slide/SlideProject";
import { Typography } from "@mui/material";
import projectApi from "../../api/projectApi";
import moment from 'moment';
import LoadingScreen from "../LoandingScreen";

const StyleBox = styled(Box)({
    padding: '0 2vh',
    maxWidth: '120vh',
    margin: '0 auto',
    backgroundColor: 'white',
    height: '50vh',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    flexDirection: 'colurmn',
    position: 'relative',
    zIndex: '100'
});

const StyleBoxContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    maxWidth: '120vh',
    margin: '0 auto',
    paddingTop: '20px',
    [theme.breakpoints.down('sm')]: {
        display: 'block',
    }
}));

const StyleContent = styled(Box)(({ theme }) => ({
    width: '80%',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    }
}));

const StyleArchitect = styled(Box)(({ theme }) => ({
    width: '20%',
    marginTop: '32px',
    marginLeft: '15px',
    wordBreak: 'break-all',
    [theme.breakpoints.down('sm')]: {
        wordBreak: 'normal',
        marginLeft: '0',
        width: '100%',
    }
}));

export default function ProjectDetail() {
    const [project, setProject] = useState(null);
    const { pathname } = useLocation();

    useEffect(() => {
        const getProject = async () => {
            try {
                const response = await projectApi.getProject(pathname.split('/').pop());
                const { project, prevProject, nextProject } = response
                setProject({
                    current: project,
                    prevProject,
                    nextProject
                });

            } catch (error) {
                console.log('Failed to get project: ', error);
            }
        }

        getProject();
    }, [pathname]);

    console.log(project);

    function handleClick(projectCurrent) {
        if (projectCurrent == null) {
            return `/projects`
        }
        else {
            return `/projects/${projectCurrent.slug}`
        }
    }

    return (
        <>
            {project && (
                <>
                    <StyleBox>
                        <SlideProject images={project.current.images} />
                        <StyleBoxContent>
                            <StyleContent >
                                <Typography variant="h5" sx={{ height: '35px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} >
                                    {project.current.name}
                                </Typography>

                                <div className="scrollbar scrollbar-detail" id="style-4">
                                    <div className="force-overflow">
                                        <Typography variant="p" sx={{ fontSize: '12px', color: '#6D6D6D' }}>
                                            <div dangerouslySetInnerHTML={{ __html: `${project.current.description}` }}></div>

                                        </Typography>
                                    </div>
                                </div>
                            </StyleContent>
                            <StyleArchitect >
                                <Typography variant="p" sx={{ color: '#000000', maxWidth: '100%' }}>
                                    TIME:
                                    <Typography variant="p" sx={{ color: '#6D6D6D', marginLeft: '10px' }}>
                                        {moment(project.current.createAt).format('DD/MM/YYYY')}
                                    </Typography>
                                </Typography>
                                <br />
                                <Typography variant="p" sx={{ color: '#000000' }} >
                                    ARCHITECT:
                                    <Typography variant="p" sx={{ color: '#6D6D6D', marginLeft: '10px' }}>
                                        {project.current.architect.name}
                                    </Typography>
                                </Typography>

                            </StyleArchitect>
                        </StyleBoxContent>
                        <Box >
                            <div className='pagination'>
                                {project.prevProject && (
                                    <a
                                        className="button-transfer-page"
                                        href={handleClick(project.prevProject)}
                                    >
                                        {project.prevProject.name}
                                    </a>
                                )}
                                {!project.prevProject && (
                                    <button className="button-transfer-page" disabled={true}></button>
                                )}

                                {project.nextProject && (
                                    <a
                                        className="button-transfer-page button-next"
                                        href={handleClick(project.nextProject)}
                                    >
                                        {project.nextProject.name}
                                    </a>
                                )}
                                {!project.nextProject && (
                                    <button className="button-transfer-page button-next" disabled={true}></button>
                                )}
                            </div>
                        </Box>

                    </StyleBox>


                </>
            )}
            {!project && (<LoadingScreen />)}
        </>
    )
}