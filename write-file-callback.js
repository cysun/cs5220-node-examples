"use strict";

const fs = require("fs");

fs.open("test.txt", "a", (err, fd) => {
  if (err) {
    console.log(err.message);
  } else {
    fs.write(fd, "A new line!\n", (err, bytesWritten, str) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(`${bytesWritten} bytes written.`);
      }
      fs.close(fd, err => {
        if (err) {
          console.log(err.message);
        }
      });
    });
  }
});
