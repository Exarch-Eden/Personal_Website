const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_BUILD_PATH = __dirname + "/client/build";

app.use(express.static(CLIENT_BUILD_PATH));

app.get("/api", (req, res) => {
  const accessMessage = "Accessed API endpoint";
  console.log(accessMessage);
  res.send(accessMessage);
});

app.get("*", (req, res) => {
  const indexFile = CLIENT_BUILD_PATH + "/index.html";
  const indexDoesNotExistMessage = "Index file doesn't exist.";
  if (fs.existsSync(indexFile)) {
    res.sendFile(indexFile);
    res.status = 200;
    res.end();
  } else {
    console.log(indexDoesNotExistMessage);
    res.send(indexDoesNotExistMessage);
    res.status = 404;
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`Server app listening on PORT ${PORT}`);
});
