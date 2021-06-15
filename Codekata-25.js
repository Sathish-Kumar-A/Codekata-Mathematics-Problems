
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;

inp.on("line", (data) => {
  a=+(data);
  let res=2;
  let res1=3;
  let tmp=[];
  for(var i=0;i<a;i++){
      tmp.push(res);
      res=res+res1;
      res1+=2;
  }
  console.log(...tmp);


});
