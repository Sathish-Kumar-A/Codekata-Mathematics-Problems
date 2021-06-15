const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
var a;

inp.on("line", (data) => {
  a=+(data);
  let count=0;
  for (var i=0;i<a;i++){
      for(var j=0;j<a;j++){
          if((i+j)===a){
              count+=1;
          }
      }
  }
  console.log(count);

});
