const mongoese = require("mongoose");

const ProjectSchema = mongoese.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["not started", "In Progress", "Completed"],
  },
  ClientId: {
    type: mongoese.Schema.Types.ObjectId,
    ref: "Clients",
  },
});
module.exports = mongoese.model("Project", ProjectSchema);
