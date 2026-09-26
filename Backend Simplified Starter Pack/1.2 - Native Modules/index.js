const fs = require('fs');

fs.writeFile("message.txt", "Hello", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File has been written successfully.");
});