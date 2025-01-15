import { configDotenv } from "dotenv";

import express from "express";
import { FoodCategoryRouter } from "./router/food-category";
import { FoodRouter } from "./router/food";
import { UserRouter } from "./router/user";
import { FoodOrderRouter } from "./router/food-order";
const mongoose = require("mongoose");
var cors = require("cors");

const PORT = 8000;
const app = express();
app.use(cors());
app.use(express.json());

//1. Connect mongodb
configDotenv();

const connectMongoDB = async () => {
  const MONGODB_URI: any = process.env.MONGODB_URI;
  await mongoose.connect(MONGODB_URI);
};

connectMongoDB();

app.use("/food-category/", FoodCategoryRouter);
app.use("/food/", FoodRouter);
app.use("/food-order/", FoodOrderRouter);
app.use("/user/", UserRouter)

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
