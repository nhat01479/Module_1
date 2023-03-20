/**
var a1 = 6;
var a2 = 8;

if(a1>a2){
    console.log(`Số lớn nhất là a1`);
}else{
    console.log(`Số lớn nhất là a2`);
}

a1 > a2 ? console.log(`Số lớn nhất là a1`) : console.log(`Số lớn nhất là a2`)

/-************************* Áp dụng ternary operator
var a1 = 6;
var a2 = 8;
var a3 = 1;
if(a1 > a2 && a1 > a3){
    console.log("a1 là max");
}else{
    if(a2 > a1 > a3){
        console.log("a2 là max");
    }else{
        console.log("a3 là max");
    }
}


var a1 = 6;
var a2 = 8;
var a3 = 1;

a1 > a2 && a1 > a3 ? console.log("a1 là max") : 
 ((a2 > a1 && a2 > a3) ? console.log("a2 là max") : console.log("a3 là max"))
 */



 var a1 = 9;
var a2 = 10;
var a3 = 10;
if(a1 > a2 && a1 > a3){
    console.log("a1 là max");
}else{
    if(a2 > a1 && a2 > a3){
        console.log("a2 là max");
    }else{
        console.log("a3 là max");
    }
}