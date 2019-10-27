"use strict";

const request1 = require("request");
const request2 = require("request-promise-native");

function get_page_with_callback() {
  request1("http://sun.calstatela.edu", (err, response, body) => {
    console.log(body);
  });
}

function get_page_with_promise() {
  request2("http://sun.calstatela.edu").then(body => console.log(body));
}

async function get_page_with_async() {
  let body = await request2("http://sun.calstatela.edu");
  console.log(body);
}

get_page_with_callback();
get_page_with_promise();
get_page_with_async();
