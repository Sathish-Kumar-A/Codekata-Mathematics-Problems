const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
var a;

inp.on("line", (data) => {
  a=+(data);
  let count=0;

  for(var i=1;i<a+1;i++){
      i=i.toString();
      let str='';
      for(var j=i.length-1;j>=0;j--){
          str+=i[j];
      }
      if(str==i){
          count+=1;
      }
  }
  console.log(count);

});
