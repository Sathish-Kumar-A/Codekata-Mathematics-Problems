const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
var a;

inp.on("line", (data) => {
  a=data;
  let n=+(a[0]);
  let m=+(a[1]);
  let min;
  if(n>m){
      min=m;
  }
  else{
      min=n;
  }
  let count=0;
  for(var i=1;i<min;i++){
      if(n%i===0 && m%i===0){
          count+=1
      }
  }
  if(count>1){
      console.log(0);
  }
  else{
      console.log(1);
  }
});
