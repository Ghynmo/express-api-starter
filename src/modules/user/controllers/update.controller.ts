import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { allCollections } from "@src/databases/connection.js";
import { User } from "@src/models/user.js";

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req?.params?.id;
  try {
    const filter = {
      _id: new ObjectId(id),
    };
    const query = req.body;

    const user = (await allCollections.users.updateOne(filter, {
      $set: query,
    })) as User;

    if (user) {
      res.status(200).send(`Successfully updated user with id ${id}`);
    }
  } catch (error) {
    res.status(304).send(`User with id: ${id} not updated`);
    next(error);
  }
};
