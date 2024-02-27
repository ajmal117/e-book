const express = require("express");
const app = express();
const cors = require("cors");

let port = process.env.PORT || 8000;

// middleware
app.use(
  cors({
    origin: ["https://e-book-knng.vercel.app"],
    methods: ["GET","POST", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

//mongodb configuration

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const uri = "mongodb://127.0.0.1:27017/BookInventory";

const uri =
  "mongodb+srv://user2024:user112@cluster0.lkshd4d.mongodb.net/BookInventory?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

console.log(client);

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a collection of documents
    const bookCollections = client.db("BookInventory").collection("books");

    //insert a book to the db: post method

    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    });

    app.get("/all-books", async (req, res) => {
      const books = bookCollections.find();
      const result = await books.toArray();
      res.send(result);
    });

    // update book by patch method(does not send whole body to update)
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id)
      const bookUpdateData = req.body;
      const filter = { _id: new ObjectId(id) };
      const option = { upsert: true };

      const updateDoc = {
        $set: {
          ...bookUpdateData,
        },
      };
      // update
      const result = await bookCollections.updateOne(filter, updateDoc, option);
      res.send(result);
    });

    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id)
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    });

    // get single book data by id
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.findOne(filter);
      res.json(result).status(200);
    });

    //find book by category -
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const result = await bookCollections.find(query).toArray();
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("this data comes from backend");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server successfully running on port no ${port}`);
  }
});
