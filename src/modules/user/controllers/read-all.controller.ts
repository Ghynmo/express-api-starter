import { NextFunction, Request, Response } from "express";
import { allCollections } from "@src/databases/connection.js";
import { User } from "@src/models/user.js";

export const readAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = (await allCollections.users.find({}).toArray()) as User[];

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
