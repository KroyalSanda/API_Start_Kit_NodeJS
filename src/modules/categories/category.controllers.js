import HTTPStatus from "http-status";
import Category from "./category.model";
import Post from "../posts/post.model";

export async function createCategory(req, res) {
  try {
    // return res.json(req.user._id)
    const category = await Category.createCategory(req.body, req.user._id);
    return res.status(HTTPStatus.CREATED).json(category);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function getPostsCategory(req, res) {
  try {
    // return res.json(req.params.id)
    const posts = await Post.find({ category: req.params.id });
    return res.status(HTTPStatus.CREATED).json(posts);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function getCategoryById(req, res) {
  try {
    const category = await Category.findById(req.params.id);
    return res.status(HTTPStatus.OK).json({
      ...category.toJSON()
    });
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function getCategoriesList(req, res) {
  const limit = parseInt(req.query.limit, 0);
  const skip = parseInt(req.query.skip, 0);
  try {
    const categories = await Category.list({ limit, skip });
    return res.status(HTTPStatus.OK).json(categories);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function updateCategory(req, res) {
  try {
    const category = await Category.findById(req.params.id);

    Object.keys(req.body).forEach(key => {
      category[key] = req.body[key];
    });

    return res.status(HTTPStatus.OK).json(await Category.save());
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function deleteCategory(req, res) {
  try {
    await Category.remove({ _id: req.params.id });
    return res.sendStatus(HTTPStatus.OK);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}
