"use strict";

const fs = require("fs");
const util = require("util");

const fopen = util.promisify(fs.open);
const fwrite = util.promisify(fs.write);
const fclose = util.promisify(fs.close);

let file = 0;

fopen("test.txt", "a")
  .then(fd => {
    file = fd;
    return fwrite(fd, "A New Line!\n");
  })
  .then(result => {
    console.log(`${result.bytesWritten} bytes written.`);
    return fclose(file);
  })
  .catch(err => console.log(err.message));
