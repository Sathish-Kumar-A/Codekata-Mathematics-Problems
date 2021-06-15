const readline=require("readline");
const inp=readline.createInterface({
   input:process.stdin
});
var a;
inp.on("line",(data)=>{
    a=data;
    console.log(a.length);



});
