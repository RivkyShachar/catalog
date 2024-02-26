import { app } from './app';

// it this file will be the connection to db

const start = async () => {
    app.listen(3000, ()=>{
        console.log("listening to auth at port 3000!"); 
    })
}

start();
