/**
// tính tổng từ 1-10

let total = 0;
for(let i=1;i<=10;i++){
    total += i;
}

console.log(`Tổng là: ${total}`);

// tính tổng 50-100
let total1 = 0;
for(let i=50;i<=100;i++){
    total1 += i;
}

console.log(`Tổng là: ${total1}`);

// Định nghĩa hàm sum

let total = sum(1,10);      // 1,10: đối số - argument
function sum(start, end){       // start, end: tham số - parameter
    let total = 0;
    for(let i=start;i<=end;i++){
        total += i;
    }
    return total;           // Return Trả về giá trị, có thể có hoặc không có
}
let total1 = sum(50,100);       // 50, 100: đối số
let total2 = sum(1, 1000);

console.log(`Tổng total: ${total}`);
console.log(`Tổng total: ${total1}`);
console.log(`Tổng total: ${total2}`);


// Định nghĩa hàm kiểm tra số chẵn
function isEven(number){

    // if(number%2==0){
    //     return true;
    // }else{
    //     return false;
    // }
    
    console.log("isEven..........");
    return number%2 == 0;
}

let check = isEven(5);
console.log(check);


//-------------------
// Định nghĩa hàm kiểm tra số chẵn
function isEven(number){
    console.log("isEven..........");
    // return number%2 == 0;        // Nếu không return thì trả ra là undefine
}

let check = isEven(5);
console.log(check);

///------------------------
function printMultiple(message, n) {
    console.log(n);     // Nếu không truyền giá trị n: underfine
    for (var i = 0; i < n; i++){
        console.log(message);
    }

}
printMultiple("Hello")

//------------------Tham số với giá trị mặc đinh
function printMultiple(message, n = 10) {
    console.log(n);     // Nếu không truyền giá trị n: underfine
    for (var i = 0; i < n; i++){
        console.log(message);
    }

}
printMultiple("Hello")


//------------Truyền giá trị - pass by value
function increment(n) {
    n++;        //2
    console.log("n inside the method is " + n);
}
let x = 1;      // Nguyên thủy: số, boolean, string
increment(x);
console.log(x); // x =1 

//--------------------Truyền tham chiếu - Pass by reference
let arr = [2,5];
function swap(numbers){
    let temp = numbers[0];
    numbers[0] = numbers[1];
    numbers[1] = temp;
}

swap(arr);      // Truyền vào kiểu mảng, đối tượng
console.log(arr);


//----------------Biến toàn cục và biến cục bộ
let total = 0;              // toàn cục
function sum(start, end){       
    let total = 0;          // cục bộ
    for(let i=start;i<=end;i++){
        total += i;
    }
    return total;         
}
sum(1,3);

console.log(total);


//------------Biến toàn cục và biến cục bộ 2
let total = 0;              
function sum(start, end){       
    for(let i=start;i<=end;i++){
        total += i;
    }
    return total;         
}
sum(1,3);  // total = 6 
sum(2,4);   // total = 15

console.log(total);
 */




