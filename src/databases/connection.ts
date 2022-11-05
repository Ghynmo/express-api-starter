import * as mongoDB from "mongodb";
import { User } from "../models/user";
import { Warehouse } from "../models/warehouse";
// Connection URI
const uri =
  "mongodb+srv://Zyro:Qwerty123456Zyro@cluster0.brzit.mongodb.net/?retryWrites=true&w=majority";

export interface collections {
  warehouses: mongoDB.Collection<Warehouse>;
  users: mongoDB.Collection<User>;
}

export let allCollections: collections;

export default async function connectToDatabase(): Promise<collections> {
  const client = new mongoDB.MongoClient(uri);
  await client.connect();

  const database = client.db("Pointhub");
  console.log(`Successfully connected to database: ${database.databaseName}`);

  const userCollection = database.collection<User>("users");
  const warehouseCollection = database.collection<Warehouse>("warehouses");

  allCollections = {
    users: userCollection,
    warehouses: warehouseCollection,
  };

  return allCollections;
}
