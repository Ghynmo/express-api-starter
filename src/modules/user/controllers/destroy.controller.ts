import url from "url";
import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { allCollections } from "@src/databases/connection.js";
import { User } from "@src/models/user.js";

export const destroy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUrl = url;
    const url_parts = newUrl.parse(req.url, true);
    const id = url_parts.query._id as string;

    const query = { _id: new ObjectId(id) };

    const user = (await allCollections.users.deleteOne(query)) as User;

    if (user) {
      res.status(200).send(user);
    }
  } catch (error) {
    res
      .status(404)
      .send(`Unable to find matching document with id: ${req.params.id}`);
    next(error);
  }
};
