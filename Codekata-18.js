const readline=require("readline");
const inp=readline.createInterface({
   input:process.stdin
});
var a;
inp.on("line",(data)=>{
    a=+(data);
    let b=Math.floor(a/10)+1;
    a=+(a);
    for(var i=1;i<b+1;i++){
        if(a<(10*i)){
        console.log(10*i);
        break;
    }}


});
