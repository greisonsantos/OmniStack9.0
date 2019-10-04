const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://OmniSTack:OmniSTack@omnistack9-ndofq.mongodb.net/semana9?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);
app.listen(3333);
