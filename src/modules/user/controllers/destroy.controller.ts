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
  const newUrl = url;
  const url_parts = newUrl.parse(req.url, true);
  const id = url_parts.query._id as string;

  try {
    const query = { _id: new ObjectId(id) };

    const user = (await allCollections.users.deleteOne(query)) as User;

    if (user) {
      res.status(202).send(`Successfully removed user with id ${id}`);
    }
  } catch (error) {
    res.status(400).send(`Failed to remove game with id ${id}`);
    next(error);
  }
};
