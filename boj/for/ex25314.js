const input = require("fs").readFileSync(0).toString();

const repeat = Math.floor(parseInt(input) / 4);

console.log("long ".repeat(repeat) + "int");
