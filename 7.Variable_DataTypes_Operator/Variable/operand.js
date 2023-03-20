
// var a = 5;
// var b = "5";

// console.log(a==b);
// // console.log(a!=b);

// // Vừa so sánh giá trị vừa so sánh kiểu dữ liệu
// console.log(a===b); 

// var a = 5 == "5";   // true
// var b = 5 === "5";  //false
// var c = !b;     // true;

// console.log((a||b) && c );

// /---------------------------
// let a = 5;

// console.log(a);
// // a  = 10;

// a += 5;         // a = a + 5;
// console.log(a);     // 10

// a %= 2;         // a = a%2;
// console.log(a);


// let a  = 2;
// a **= 10;        //a=a^10;

// console.log(a);


// /---------------------------
// let a = 5;               
// a++;        // a = a + 1; ==> xử lý rồi mới cộng
// console.log(a);
// ++a;        // a = a + 1 ==> cộng a trc xử lý sau
// console.log(a);

// /---------------------------
// let a = 5;
// let b = ++a == 6;   //tăng a lên 1 đơn vị rồi so sánh với 6;
// console.log(b);     //true
// console.log(a);     //a=6

// /---------------------------
// let a = 5;
// let b = a++ != 6;   //so sánh a với 6 rồi tăng a lên 1 đơn vị
// console.log(b);     //true
// console.log(a);     //6

// /--------------------------
// let a = 5;
// let b = a++ * 5 + --a*2;   //5*5=25 ==>tăng a lên 1 = 6 ==> giảm a xuống 1 = 5==> 5*2=10  ==>35
// console.log(a);     //5
// console.log(b);     // 35
// /--------------------------
// console.log(1 + 2 + "3" + 4 + 5);
// 3 + "3" + 4 + 5
// // "33" + 4 +5
// // "334" + 5
// // "33345"
// console.log(1 + 2 + "3" + 4 + 5);
// 
// /--------------------------
// var a = 5;  // number
// var b;      // underfined


// console.log(a + b);     // NaN


//  */
// // 1.Số học: +-*/, % ,()        % phép toán chia lấy dư
// // 2. So sánh: == != >= <=, ===
// // 3. Logic: &&, ||, !
// // 4. Gán: +=,-=, *=, /=, %=, **= ( số ^), ++ --
// // 5. Nối chuỗi








        
var x = [1,3,5,7];
var y = [2,4,6];
x[2] = y[x.length-3] + x [ x[0] + y[0] ];	
console.log(x);


