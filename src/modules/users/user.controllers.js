import HTTPStatus from "http-status";
import User from "./user.model";

export async function signUp(req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(HTTPStatus.CREATED).json(user.toAuthJSON());
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json({ message: e.message });
  }
}

export function login(req, res, next) {
  return res.status(HTTPStatus.OK).json(req.user.toAuthJSON());
}

export async function getUser(req, res) {
  try {
    let user = await User.findById(req.user._id).select("email");
    return res.status(HTTPStatus.CREATED).json(user);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}
