const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kamalac777:Mu8ffb3NVvU8pVYj@cluster0.zfltsnw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

client.connect();

module.exports = client;