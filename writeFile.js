const fs = require("fs");
let path = "filepath.txt";

let data = "This is written from a string\n";
let buf = Buffer.from("This is written from a buffer\n", "utf8");

fs.writeFile(path, data, { flag: "a" }, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("data wretten sucsessfuly!");
  }
});
