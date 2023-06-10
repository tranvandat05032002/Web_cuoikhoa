const express = require("express");
const port = 4000;
const app = express();

app.get("/test", (req, res) => {
  res.send("This is a test endpoint");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
