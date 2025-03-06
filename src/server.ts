import express from "express";
import { AppDataSource } from "./_helpers/db";
import usersController from "./users/user.controller";

const app = express();

app.use(express.json());
app.use("/users", usersController);

AppDataSource.initialize().then(() => {
    app.listen(4000, () => {
        console.log("Server listening on port 4000");
    });
}).catch(err => {
    console.error("Database initialization failed:", err);
});
