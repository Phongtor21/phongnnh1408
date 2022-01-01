const express = require('express');
const router = express.Router();

// controllers
const projectsAPI = require('../app/controllers/ProjectsAPI');
// middlewares
const upload = require('../app/middlewares/upload');

router.put('/:projectId', upload.fields([
    { name: 'images', maxCount: 10 },
    { name: 'logo', maxCount: 1 }
]), projectsAPI.edit);
router.delete('/:projectId', projectsAPI.deleteById);
router.patch('/restore/:projectId', projectsAPI.restoreById);
router.patch('/', projectsAPI.deleteAll);
router.post('/', upload.fields([
    { name: 'images', maxCount: 10 },
    { name: 'logo', maxCount: 1 }
]), projectsAPI.insert);
router.get('/:page/:number', projectsAPI.findAllWithPagination);
router.get('/:projectSlug', projectsAPI.findBySlug);
router.get('/', projectsAPI.findAll);

module.exports = router;
