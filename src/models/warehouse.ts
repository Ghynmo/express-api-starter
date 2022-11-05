import { ObjectId } from "mongodb";

export interface Warehouse {
  warehouse_name?: string;
  address?: string;
  id?: ObjectId;
}
