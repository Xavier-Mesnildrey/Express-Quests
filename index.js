require("dotenv").config();

const app = require("./src/app");

const port = process.env.APP_PORT;

app
  .listen(port, () => {
    console.log(`http://localhost:${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
