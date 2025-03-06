import { MongoClient } from "mongodb";

async function connectDatabase() {

  const uri =
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vocds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  const client = new MongoClient(uri, {
    useUnifiedTopology: true,
  });

  return client;
}

export { connectDatabase };