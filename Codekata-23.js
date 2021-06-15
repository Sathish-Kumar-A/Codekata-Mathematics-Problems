
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;

inp.on("line", (data) => {
  a=data;
  let mul=1;
  for(var i=0;i<a.length;i++){
      mul*=+(a[i]);
  }
  console.log(mul);

});
