
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;

inp.on("line", (data) => {
  a=data;
  let b=[];
  for(var i=0;i<a.length;i++){
      if(+(a[i]%2!==0)){
          b.push(a[i]);
      }
  }
  if(tmp.length>0){
      console.log(...b);
  }
  else{
      console.log(-1);
  }


});
