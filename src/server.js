const express = require("express");
const mongoose = require("mongoose");
const databaseConfig = require("./config/database");
//const morgan = require('morgan')
//const helmet = require("helmet")
const cors = require("cors");
const cron = require("node-cron");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";

    this.database()
    this.middlewares();
    this.routes();
  }

  database () {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
  }

  middlewares() {
    this.express.use(express.json({ limit: '50mb' }));
    this.express.use(express.urlencoded({ extended: true }));
    cron.schedule("* * * * *", () => require('./app/cron/Cron').Guard());
    this.express.use(cors());
    this.express.use((req, res, next) => {
      res.set('X-Powered-By', 'JAVA/5.6.1');
      next();
    });
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
