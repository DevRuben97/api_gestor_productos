//Modules
import express from 'express';
import 'reflect-metadata';

import {
    ConfigureServices,
    configureDatabase
} from './config';
import configureRouter from './Routes/Router';
import { Server } from 'http';


let _server: Server;

const server = {
    start() {
        //Initialize the express server:
        const app = express();

        //Settings
        app.set('port', 4000);
        _server=  app.listen(app.get('port'), () => {
            console.log(`Server Started on port ${app.get('port')}`)
        })
        //services:
        ConfigureServices(app);


        //Routes
        configureRouter(app);

        //Create database connection:
        configureDatabase();
    },
    close(){
        _server.close();
    }
}


if (!module.parent){
    server.start();
}