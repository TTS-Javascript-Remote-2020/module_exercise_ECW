const Request = require("request-promise");
const Moment = require("moment");

const endpoint = "http://jsonplaceholder.typicode.com/posts/1";

function output(data) {
  console.log(`${new Moment().format("h:mm:ss a")}: ${data}`);
}

setInterval(function () {
  Request(endpoint).then(output);
}, 3000);
