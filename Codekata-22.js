const readline=require("readline");
const inp=readline.createInterface({
   input:process.stdin
});
const a1=[];
inp.on("line",(data)=>{
    a1.push(data);
    let a=a1[0].split(" ");
    let mul=1;
    for(var i=0;i<a.length;i++){
        mul*=+(a[i]);
    }
    let square=function(mul){
        return mul>0 && Math.sqrt(mul)%1===0;
    };
    if(square(mul)===true){
        console.log("yes");
    }
    else{
        console.log("no");
    }


});
