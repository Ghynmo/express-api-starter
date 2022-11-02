import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { allCollections } from "@src/databases/connection.js";
import { User } from "@src/models/user.js";

export const readOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req?.params?.id;
    const query = { _id: new ObjectId(id) };

    const user = (await allCollections.users.findOne(query)) as User;

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
