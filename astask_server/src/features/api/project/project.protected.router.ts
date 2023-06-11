import { Router } from 'express';
import projectController from './project.controller';
import projectMiddleware from './project.middleware';;


const router: Router = Router();

router.get('/:uuid',projectMiddleware.loadProject, projectController.getProject);

router.get('/', projectController.getProjects);

router.post('/', projectController.postProject);

router.put('/:uuid',projectMiddleware.loadProject, projectController.putProject);

router.delete('/:uuid',projectMiddleware.loadProject, projectController.deleteProject);

export default router;
