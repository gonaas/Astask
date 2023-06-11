import { Router } from 'express';
import itemController from './item.controller';
import itemMiddleware from './item.middleware';

const router: Router = Router();

router.get('/', itemController.listItem);

router.get('/:uuid', itemController.getItems);

router.post('/', itemController.postItem);

router.put('/status', itemController.changeStatus);

router.put('/:uuid', itemMiddleware.loadItem, itemController.putItem);

router.delete('/:uuid', itemMiddleware.loadItem, itemController.deleteItem);

export default router;
