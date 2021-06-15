
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a=[];

inp.on("line", (data) => {
  a.push(data);
  data1=a[0].split(" ");
  let res=+(data1[0]);
  let res1=+(data1[1]);
  if((res-res1)%2===0){
      console.log("even");
  }
  else{
      console.log("odd");
  }
});
