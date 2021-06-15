
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
  let c=data1.slice(0,3)
  let res=0;
  let res1=0;
  for(var i=0;i<b.length;i++){
      res+=+(b[i]);
  }
  for (var j=0;j<c.length;j++){
      res1+=+(c[j]);
  }
  if(res===res1){
      console.log(1);
  }
  else{
      console.log(0);
  }
});
