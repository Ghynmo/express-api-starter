import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { allCollections } from "@src/databases/connection.js";
import { User } from "@src/models/user.js";

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req?.params?.id;
    const filter = {
      _id: new ObjectId(id),
    };
    const query = req.body;

    const user = (await allCollections.users.updateOne(filter, {
      $set: query,
    })) as User;

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
