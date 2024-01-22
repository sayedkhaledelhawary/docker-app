const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

const app = express();
const port = 3000;


const DB_USR = 'root';
const DB_PASSWORD = 'example' ;
const DB_PORT = 27017;
const DB_HOST = 'mongo';
const REDIS_PORT = '6379';
const REDIS_HOST = 'redis';

const redisClient = redis.createClient({
  url: `redis://${REDIS_HOST}:${REDIS_PORT}`,
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('connected to redis....'));
redisClient.connect();









const URI = `mongodb://${DB_USR}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

mongoose.connect (URI).then (() => console.log("conected to db...")).catch((err) => console.log("filed to conected db: ", err));

app.get('/', (req, res) => {
  res.send('heloo docker images ');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

