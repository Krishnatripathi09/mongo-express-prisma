const express = require("express");

const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  `Server is Listening on PORT ${PORT}`;
});
