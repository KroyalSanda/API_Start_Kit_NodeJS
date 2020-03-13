import { Router } from 'express';

import * as categoryController from './category.controllers';
import { authJwt } from '../../services/auth.services';

const routes = new Router();

routes.post(
  '/',
  authJwt,
  categoryController.createCategory,
);

routes.get('/posts/:id', categoryController.getPostsCategory);
routes.get('/:id', categoryController.getCategoryById);
routes.get('/', categoryController.getCategoriesList);
routes.put(
  '/:id',
  authJwt,
  categoryController.updateCategory,
);
routes.delete('/:id', authJwt, categoryController.deleteCategory);

export default routes;