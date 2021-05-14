const express = require("express");
const path = require("path");
const fs = require("fs");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_BUILD_PATH = __dirname + "/client/build";

// http methods
const GET = "get";
const POST = "post";
const PUT = "put";
const UPDATE = "update";
const DELETE = "delete";

app.use(express.static(CLIENT_BUILD_PATH));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});

app.get("/api", async (req, res) => {
  const accessMessage = "Accessed API endpoint";
  console.log(accessMessage);

  const userName = "Exarch-Eden";
  const repoName = "Personal_Website";

  const usersUrl = `https://api.github.com/users/${userName}/repos`;
  const repoLangUrl = `https://api.github.com/repos/${userName}/${repoName}/languages`;

  // holds the JSON data received from the GET request
  let data = {};

  // make GET request to GitHub API
  try {
    // fetched response
    const fetchedRes = await fetch(repoLangUrl);
    // response converted to JSON
    data = await fetchedRes.json();
    console.log("DATA:\n", data);
  } catch (error) {
    console.log("ERROR: ");
    console.log(error);
    res.send(error);
    return;
  }

  res.send(JSON.stringify(data));
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
