
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;

inp.on("line", (data) => {
  a=+(data);
  let res=a*(a+1)/2
  console.log(res);

});
