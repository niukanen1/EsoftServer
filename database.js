const dotenv = require('dotenv');
dotenv.config();
const { MongoClient} = require('mongodb');

const client = new MongoClient(process.env.MONGODB_URI)
async function RunDBConnect() {  
    const collection = client.db("ESOFT").collection("users")  
    try { 
        await client.connect().then(() => console.log("Successfully connected to the database!!!"))
        const cursor = await collection.find({}); 
        await cursor.forEach(doc => console.log(doc));
    } finally {     
        await client.close(); 
        console.log("Connection closed...");
    }
}

module.exports = {RunDBConnect};