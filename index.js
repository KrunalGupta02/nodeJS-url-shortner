import express from "express";
import urlRoute from "./routes/url.route.js";
import dotenv from "dotenv";
import connectToMongoDB from "./connect.js";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8001;

connectToMongoDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running at port : ${PORT}`);
        });

        app.on("error", (error) => {
            console.log("Error", error);
        });
    })
    .catch((e) => {
        console.error("MongoDB connection failed !!!", e);
    });

app.use("/url", urlRoute); // All routes are handled inside urlRoute.js

export { app };
