require('dotenv').config()

const express = require('express')
const returnAPIKey = require('./key')
const path = require('path')

async function run() {
  var client_id = process.env.CLIENT_ID;
  var client_secret = process.env.CLIENT_SECRET;
  var key = await returnAPIKey(client_id, client_secret)
  console.log(key)


  const PORT = 8888

  const app = express();

  app.use("/js", express.static(path.join(__dirname, "static/js/")));

  app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "./static/html/index.html"));
    });


  app.listen(PORT, () => {
      console.log(`Listening on http://localhost:${PORT}/`);
    });
  }
run()
