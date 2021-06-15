const readline=require("readline");
const inp=readline.createInterface({
   input:process.stdin
});
var a;
inp.on("line",(data)=>{
    a=data;
    let sum=0;
    for(var i=0;i<a.length;i++){
        sum+=+(a[i]);
    }
    if(sum%3===0){
        console.log("yes");
    }
    else{
        console.log("not");
    }



});
