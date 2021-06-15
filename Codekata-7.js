const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
var a;

inp.on("line", (data) => {
  a=data;
  let res=+(a)
  let sum=0;
  let mul=1;
  for(var i=0;i<a.length;i++){
      sum+=+(a[i]);
      mul*=+(a[i]);
  }
  if((sum+mul)===res){
      console.log("Great");
  }
  else{
      console.log("no");
  }

});
