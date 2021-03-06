'use strict';

/************* include library **************/
const http    = require('http');
const express = require('express');
const server  = express();

const serverPort = 80;


/************* Routing **************/
//웹페이지의 세부 주소를 지정한다.
server.use('/',            require('./server'));
server.use('/api',         require('./api')); //승철
server.use('/api1',         require('./api1')); //상원
server.use('/client',       require('./client'));
server.use('/client1',       require('./client1'));

/************* Running server **************/
const httpServer = http.createServer(server);
httpServer.listen(serverPort, () => {
    const startdate = new Date();
    console.log(`[START SERVER (port ${serverPort}) ${startdate}]`);
});