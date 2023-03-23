/**
 //---------------let không cho khai báo lại
let total = 0;              

for(let i=1;i<=10;i++){
    total += i;
}

let total;


//--------var có thể cho khai báo lại
var total = 0;              

for(let i=1;i<=10;i++){
    total += i;
}
var total = 7;

//---------------Trường hợp đặc biệt: không quan tâm
var total= 0;  
let total = 7;
console.log(total);

//-------------khai báo var trong blockcode ({})  thì nó hoisting - trồi lên
if(1>0){
    {
        {
            var total = 10;   //hoisting: trồi lên ra tới toàn cục
        }
    }
    
}
console.log("total: " + total);
//----------------Khai báo let trong blockcode thì chỉ có phạm vi trong đó thôi
if(1>0){
    let total = 10;
}
console.log("total: " + total);
 */        




