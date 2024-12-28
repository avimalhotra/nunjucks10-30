    /*mdb.js*/
const { MongoClient } = require('mongodb');

    // Connection URL
    // const url = 'mongodb://localhost:27017';
    const url=`mongodb+srv://admin:admin@avi.j3vc0.mongodb.net/?retryWrites=true&w=majority&appName=avi`;

const client = new MongoClient(url);
    
    // Database Name
  const dbName = 'sample_mflix';
    
  async function main() {
      // Use connect method to connect to the server
      await client.connect();
      console.log('Connected successfully to server');
  
      const db = client.db(dbName);
      const collection = db.collection('embedded_movies');
    
      // the following code examples can be pasted here...

        // const insertResult = await collection.insertMany([{ name:"swift", type:"hatchback" },{ name:"grand vitara", type:"suv" }]);
        // console.log('Inserted documents =>', insertResult); 

        // const findResult = await collection.find({}).toArray();
        // const findResult = await collection.find({price:{$lte:800000}}).toArray();

        // const findResult = await collection.find({title:'The Perils of Pauline'}).toArray();

        // console.log( findResult );
    
      return 'done.';
  }
    
  main().then(console.log).catch(console.error).finally(() => client.close());   