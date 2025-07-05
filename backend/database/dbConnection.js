import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "RESTURANT",
    })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.log(`Database connection failed! ${error}`);
    });
};
