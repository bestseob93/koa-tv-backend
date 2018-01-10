require('dotenv').config();
const {
    MONGO_URI: mongoURI
} = process.env;

const Koa = require('koa');
const Router = require('koa-router');

const db = require('./db/connection');
const routes = require('./routes');
db.connect();
const app = new Koa();

const PORT = 1337;

const router = new Router();

router.use('/api/v1', routes.routes());

app.use(router.routes());

const server = app.listen(PORT, () => {
    console.log(`KOA SERVER ON PORT: ${PORT}`);
});

module.exports = server;