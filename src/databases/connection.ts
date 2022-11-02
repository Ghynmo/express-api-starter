import * as mongoDB from "mongodb";
import { User } from "../models/user";
// Connection URI
const uri =
  "mongodb+srv://Zyro:Qwerty123456Zyro@cluster0.brzit.mongodb.net/?retryWrites=true&w=majority";

export interface collections {
  users: mongoDB.Collection<User>;
}

async function connectToDatabase(): Promise<collections> {
  const client = new mongoDB.MongoClient(uri);
  await client.connect();

  const database = client.db("Pointhub");
  console.log(`Successfully connected to database: ${database.databaseName}`);
  const userCollection = database.collection<User>("users");

  const newCollection: collections = {
    users: userCollection,
  };

  return newCollection;
}

export const allCollections = await connectToDatabase();
