const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];

inp.on("line", (data) => {
  a.push(data);
  });
inp.on("close",()=>{
    data1=a[1].split(" ");
    var min=+(data1[0]);
  for(var i=0;i<data1.length-1;i++){
      if(min>(+(data1[i]))){
          min=data1[i];
      }
              }
    console.log(min);

});
