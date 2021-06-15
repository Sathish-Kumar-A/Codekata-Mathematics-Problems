
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;

inp.on("line", (data) => {
  a=+(data);
  let res =0;
  let res1;
  let tmp=[];
  for(var i=1;i<a+1;i++){
      res+=i;
      res1=res*res;
      tmp.push(res1);
  }
  console.log(...tmp);
});
