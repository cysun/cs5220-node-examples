"use strict";

const fs = require("fs");
const util = require("util");

const fopen = util.promisify(fs.open);
const fwrite = util.promisify(fs.write);
const fclose = util.promisify(fs.close);

async function write_file() {
  try {
    let fd = await fopen("test.txt", "a");
    let result = await fwrite(fd, "A New Line!\n");
    console.log(`${result.bytesWritten} bytes written.`);
    await fclose(fd);
  } catch (err) {
    console.log(err);
  }
}

write_file();

// Because async function returns a promise, an alternative to try/catch
// is to handle the error in the error handler of the returned promise.
// For example: write_file().catch( err=>console.log(err) );
