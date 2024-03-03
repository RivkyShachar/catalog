// import { Client } from 'pg';

import { app } from "./app";
import { natsWrapper } from "./nats-wrapper";

// it this file will be the connection to db

const start = async () => {
  // if (!process.env.POSTGRES_HOST) {
  //   throw new Error("POSTGRES_HOST must be defined");
  // }
  // if (!process.env.POSTGRES_PORT) {
  //   throw new Error("POSTGRES_PORT must be defined");
  // }
  // if (!process.env.POSTGRES_USER) {
  //   throw new Error("POSTGRES_USER must be defined");
  // }
  // if (!process.env.POSTGRES_PASSWORD) {
  //   throw new Error("POSTGRES_PASSWORD must be defined");
  // }
  // if (!process.env.POSTGRES_DB) {
  //   throw new Error("POSTGRES_DB must be defined");
  // }
  // if (!process.env.NATS_CLIENT_ID) {
  //   throw new Error("NATS_CLIENT_ID must be defined");
  // }
  // if (!process.env.NATS_URL) {
  //   throw new Error("NATS_URL must be defined");
  // }
  // if (!process.env.NATS_CLUSTER_ID) {
  //   throw new Error("NATS_CLUSTER_ID must be defined");
  // }

  // try {
  //   await natsWrapper.connect(
  //     process.env.NATS_CLUSTER_ID,
  //     process.env.NATS_CLIENT_ID,
  //     process.env.NATS_URL
  //   );
  //   natsWrapper.client.on("close", () => {
  //     console.log("NATS connection closed!");
  //     process.exit();
  //   });
  //   process.on("SIGINT", () => natsWrapper.client.close());
  //   process.on("SIGTERM", () => natsWrapper.client.close());

    // new ExampleListener(natsWrapper.client).listen();

    // const pool = new Pool({
    //     user: process.env.POSTGRES_USER,
    //     password: process.env.POSTGRES_PASSWORD,
    //     host: process.env.POSTGRES_HOST,
    //     port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
    //     database: process.env.POSTGRES_DB,
    //   });
  
    //   await pool.connect();
    //   console.log('Connected to PostgreSQL');
  // } catch (err) {
  //   console.error(err);
  // }

  app.listen(3000, () => {
    console.log("listening to auth at port 3000!");
  });
};

start();
