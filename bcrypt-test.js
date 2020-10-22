"use strict";

const bcrypt = require("bcryptjs");

function bcrypt_with_callback(text) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(text, salt, function (err, hash) {
      console.log(hash);
    });
  });
}

function bcrypt_with_promise(text) {
  bcrypt
    .genSalt()
    .then((salt) => bcrypt.hash(text, salt))
    .then((result) => console.log(result));
}

async function bcrypt_with_async(text) {
  let salt = await bcrypt.genSalt();
  let hash = await bcrypt.hash(text, salt);
  console.log(hash);
}

bcrypt_with_callback("abcd");
bcrypt_with_promise("abcd");
bcrypt_with_async("abcd");
