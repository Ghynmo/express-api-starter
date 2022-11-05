import { NextFunction, Request, Response } from "express";
import { allCollections } from "@src/databases/connection.js";
import { Warehouse } from "@src/models/warehouse";

export const readAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const warehouse = (await allCollections.warehouses
      .find({})
      .toArray()) as Warehouse[];

    if (warehouse) {
      res.status(200).send(warehouse);
    }
  } catch (error) {
    res
      .status(404)
      .send(`Unable to find matching document with id: ${req.params.id}`);
    next(error);
  }
};
