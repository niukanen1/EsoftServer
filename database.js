const dotenv = require('dotenv');
dotenv.config();
const { MongoClient} = require('mongodb');

const client = new MongoClient(process.env.MONGODB_URI)
async function RunDBConnect() {  
    const collection = client.db("ESOFT").collection("users")  
    let data = []; 
    try { 
        await client.connect().then(() => console.log("Successfully connected to the database!!!"))
        const cursor = await collection.find({}); 
        await cursor.forEach(doc => data.push(doc));
    } finally {     
        await client.close(); 
        console.log("Connection closed...");
        return data; 
    }
}

module.exports = {RunDBConnect};