import { NextFunction, Request, Response } from "express";
import { allCollections } from "@src/databases/connection.js";
// import { User } from "@src/models/user.js";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = req.body;

    const result = await allCollections.users.insertOne(query);

    if (result) {
      res
        .status(201)
        .send(`Successfully created a new user with id ${result.insertedId}`);
    }
  } catch (error) {
    res.status(500).send("Failed to create a new user.");
    next(error);
  }
};
