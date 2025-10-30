const express = require("express");

const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is Listening on PORT ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(400).send("I am a get Route");
});
