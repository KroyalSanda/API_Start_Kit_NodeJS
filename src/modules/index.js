import userRoutes from './users/user.routes';
import cateRoutes from './categories/category.routes'
import postRoutes from './posts/post.routes';
import uploadRoutes from './upload/upload.routes'

export default app => {
  app.use('/api/v1/users', userRoutes);
  app.use('/api/v1/categories', cateRoutes);
  app.use('/api/v1/posts', postRoutes);
  app.use('/api/v1/upload', uploadRoutes);
};
