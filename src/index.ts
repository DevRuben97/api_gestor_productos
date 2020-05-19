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

        //services:
        ConfigureServices(app);


        //Routes
        configureRouter(app);

        //Starting:
        const config = app.get('config');
        _server = app.listen(config.PORT, config.HOST, () => {
            console.log(`Server Started on PATH http://${config.HOST}:${config.PORT}`)
        })
        _server.on('error', expetion => {
            console.log(expetion);
        })

        //Create database connection:
        configureDatabase();
    },
    close() {
        _server.close();
    }
}


if (!module.parent) {
    server.start();
}