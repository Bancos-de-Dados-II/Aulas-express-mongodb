require('dotenv').config()
import { createClient } from 'redis';

const client = createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

module.exports = client;