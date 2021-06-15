
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a=[];

inp.on("line", (data) => {
  a.push(data);
});
inp.on("close",()=>{
  data1=a[1].split(" ");
  let b=data1.slice(-3,data1.length);
  let res=0;
  let tmp=[];
  for(var i=0;i<b.length;i++){
      res+=+(b[i]);
  }
  for(var j=0;j<data1.length;j++){
      tmp.push((+(data1[j])-res));
  }
  console.log(...tmp);
});
