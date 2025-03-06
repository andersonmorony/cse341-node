import { connectDatabase } from "./mongo.js";

async function getFruits() {
    try {
        const client = await connectDatabase();
        await client.connect();
        const database = client.db("cse341");
        const collection = database.collection("fruits");
        const fruits = await collection.find({}).toArray();
        await client.close();
        return fruits;
    } catch (error) {
        console.error("Failed to get fruits");
    }
}

async function addFruit(fruit) {
    try {
        const client = await connectDatabase();
        await client.connect();
        const database = client.db("cse341");
        const collection = database.collection("fruits");
        const response = await collection.insertOne(fruit);
        await client.close();
        return response;
    } catch (error) {
        console.error("Failed to add fruit");
    }
}

export { getFruits, addFruit };