const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;

inp.on("line", (data) => {
a=+(data);
if(a%13===0){
    console.log("yes");
}
else{
    console.log("no");
}
});
