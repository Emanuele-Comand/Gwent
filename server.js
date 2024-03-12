const express = require("express");
const git = require("simple-git");
const app = express();
const port = 3000;

app.get("/clone", (req, res) => {
  git()
    .clone("https://github.com/day-s-ea/API-Gwent.git", "./API-Gwent")
    .then(() => res.send("Repository cloned successfully!"))
    .catch((err) =>
      res.status(500).send("Failed to clone repository: " + err.message)
    );
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
