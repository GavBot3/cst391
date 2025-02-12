import express from "express";
import albumsRouter from "./albums/albums.routes";
import artistsRouter from "./artists/artists.routes";
import logger from "./middleware/logger.middleware";
import cors from 'cors';
import helmet from "helmet";
import dotenv from 'dotenv';

dotenv.config();


// create an instance of an express application
const app = express();
//create a variable for the port number
const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", [albumsRouter, artistsRouter]);
app.use(cors());
app.use(helmet());


if (process.env.NODE_ENV == "development") {
  app.use(logger);
  console.log(process.env.GREETING + " in dev mode");
}

//  starts the server and listens for incoming requests
app.listen(port, () => {
  // send a message to the console
  console.log(`Example app listening at http://localhost:${port}`);
});

