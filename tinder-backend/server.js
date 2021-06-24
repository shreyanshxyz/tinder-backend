import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

const app = express();

const PORT = process.env.port || 5000;
const CONNECTION_URL =
  "mongodb+srv://admin:admin0001@cluster0.qq38z.mongodb.net/tinderDB?retryWrites=true&w=majority";

app.use(express.json());
app.use(Cors());

mongoose.connect(CONNECTION_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello Shreyansh</h1>");
});

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
