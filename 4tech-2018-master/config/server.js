'use strict';

const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const consign = require('consign');
const allCors = require('./cors')

server.use(allCors)
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
consign()
    .include('./config/firebaseConfig.js')
    .then('./app/routes')
    .into(server)

module.exports = server;