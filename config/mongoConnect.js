const { MongoClient } = require('mongodb');


const uri = 'mongodb://localhost:27017';

// Replace with your database name
const dbName = 'myDatabase';

async function main() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);

    // Use the db object to interact with your database
    // For example, to find all documents in a collection:
    const collection = db.collection('myCollection');
    const documents = await collection.find({}).toArray();
    console.log(documents);

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);