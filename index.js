import express from "express";
import urlRoute from "./routes/url.route.js";
import dotenv from "dotenv";
import connectToMongoDB from "./connect.js";
import path from "path";
import staticRouter from "./routes/staticRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Used to get the form data from the body

const PORT = process.env.PORT || 8001;

app.set("view engine", "ejs"); // Set EJS as the view engine
app.set('views', path.resolve("./views")) // Set the views directory

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

app.use("/", staticRouter)

export { app };
