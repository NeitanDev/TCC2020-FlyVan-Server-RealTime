// require("dotenv").config();

const express = require('express');
const routes = require('./routes');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

// require('./database/index');


const app = express();
const server = http.Server(app);
const io = socketio(server);

app.use(cors());

app.use((req, res, next)=>{
    req.io = io;
    next();
});

app.use(express.json());
app.use(routes);

server.listen(process.env.PORT || 4444);