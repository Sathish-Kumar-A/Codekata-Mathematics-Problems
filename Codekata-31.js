
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;

inp.on("line", (data) => {
  a=data;
  let tmp=[];
  for(var i=0;i<data.length;i++){
      let count=0;
      for(var j=i;j<data.length-1;j++){
          if(a[j]==1 && a[j+1]==1){
              count+=1;
          }
          else{
              break;
          }
      }
      tmp.push(count);
  }
  let max=+(tmp[0]);
  for(var k=0;k<tmp.length;k++){
      if(max<+(tmp[k])){
          max=tmp[k];
      }
  }
  if(max>0){
      console.log(max+1);
  }
  else{
      console.log(-1);
  }

});
