const mongoese = require("mongoose");

const ClentSchema = mongoese.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
  },
});
module.exports = mongoese.model("Clients", ClentSchema);
