const readline=require("readline");
const inp=readline.createInterface({
   input:process.stdin
});
var a;
inp.on("line",(data)=>{
    a=data;
    let tmp=[];
    for(var i=0;i<a.length;i++){
        tmp.push(a[i]);
    }
    let tmp1=[... new Set(tmp)];
    if (tmp1.length===2){
        console.log("Saturated");
    }
    else{
        console.log("Unsaturated");
    }

});
