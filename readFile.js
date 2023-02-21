const fs = require("fs");

const filepath = "filepath.txt";

// let data = fs.readFileSync(filepath, "utf-8");
// console.log(data);

fs.readFile(filepath, "utf-8", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data);
  }
});
