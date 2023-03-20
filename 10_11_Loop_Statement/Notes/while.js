// while (điều kiện) {
//     câu lệnh được thực thi nếu điều kiện true
// }

// var i = 0;
// while (i<100) {
//     i++
//     console.log(i);
// }

// ==>

// var i = 1;
// while (i<=100){
//     console.log(i);
//     i++;
// }

// var myArray = [
//     'JavaScrip',
//     5,    
//     'Java',
// ];
// var i = 0;
// while (i < myArray.length){
//     console.log(myArray[i]);
//     i++;
// }

 
//     var cars = ["BMW", "Volvo", "Saab", "Ford"]; 
//     var text = ""; 
//     var len = cars.length; 
// while (len--) {                       //(len=4, xử lý xong giảm len 1 đơn vị)              
//     text += cars[len] + "<br>"; }     //nên ở đây len = 3
//     document.write(text);             //Điều kiện true hoặc false
// console.log(cars[4]);                 //(len--) ~ (len!=0)


// var i = 1;
// while (true){
    
//     // console.log('So thu ' + i);
//     console.log(`Số thứ ${i}`);    
//     if (i == 10){
//         break;
//     }
//     i++;
// }


// var i = 0;
// while (i<=10){
//     if (i%2==0 && i>=2){
//     console.log(i);}
//     i++;
// }

let str = "";
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        str += "* "
    }
    str += "\n";        // Tại vì sao phải bỏ \n  ???
}
console.log(str);