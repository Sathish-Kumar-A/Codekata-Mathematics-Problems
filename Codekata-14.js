const readline=require("readline");
const inp=readline.createInterface({
   input:process.stdin
});
var a;
inp.on("line",(data)=>{
    a=+(data);
    for(var i=1;i<a;i++){
        if((Math.pow(2,i))==a){
            console.log(Math.pow(2,i+1));
            break;
        }}

});
