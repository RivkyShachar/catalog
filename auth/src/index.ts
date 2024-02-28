import { app } from './app';
import { natsWrapper } from './nats-wrapper';
import { ExampleListener } from './events/listeners/example-listener';

// it this file will be the connection to db

const start = async () => {
    if (!process.env.NATS_CLIENT_ID) {
        throw new Error('NATS_CLIENT_ID must be defined');
      }
      if (!process.env.NATS_URL) {
        throw new Error('NATS_URL must be defined');
      }
      if (!process.env.NATS_CLUSTER_ID) {
        throw new Error('NATS_CLUSTER_ID must be defined');
      }

      try {
        await natsWrapper.connect(
          process.env.NATS_CLUSTER_ID,
          process.env.NATS_CLIENT_ID,
          process.env.NATS_URL
        );
        natsWrapper.client.on('close', () => {
          console.log('NATS connection closed!');
          process.exit();
        });
        process.on('SIGINT', () => natsWrapper.client.close());
        process.on('SIGTERM', () => natsWrapper.client.close());
    
        new ExampleListener(natsWrapper.client).listen();
    
      } catch (err) {
        console.error(err);
      }
    

    app.listen(3000, ()=>{
        console.log("listening to auth at port 3000!"); 
    })
}

start();
