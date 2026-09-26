const fs = require("fs");

fs.writeFile("./index.txt", "Hello World", (error) => {
  if (error) {
    console.log(error);
  }
});

fs.readFile("./index.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);
});
