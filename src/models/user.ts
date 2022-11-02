import { ObjectId } from "mongodb";

export interface User {
  name?: string;
  address?: string;
  id?: ObjectId;
}
