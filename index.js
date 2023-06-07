const express = require("express");
const mongoose = require("mongoose");
const schema = require("./ghaphqlSchema/schema");
require("dotenv").config();
var { graphqlHTTP } = require("express-graphql");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://suman:suman123@cluster0.hfdvoep.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  console.log("database is runnning");
};

connectDB();

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(5000, () => {
  console.log("server is running");
});
