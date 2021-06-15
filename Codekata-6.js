const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];

inp.on("line", (data) => {
  a.push(data);
  data1=a[0].split(" ");
  let a1=data1[0];
  let b=data1[1];
  let c=data1[2];
  console.log((a1*b)%c)


});
