// for (var i = 1; i<=100; i++) {
//     console.log(i);
// }
 /* Cú pháp
 for (khai báo biến tham gia vào biểu thức điều kiện; biểu thức điều kiện; thay đổi giá trị của biến điều kiện) {
     khối lệnh sẽ được thực thi trong mỗi lần lặp
 }
 */
//----------------------------------------------------------------------------------
// var i = 1;                 ==>chạy 1 lần trước khi vòng for chạy nên có thể đưa ra ngoài 
// for (; i<=100; i++){
//     console.log(i);
// }
//-----------------------------------------------

// var i = 1;                    //    (; ; i++)
// for (; ; i++){       // ô thứ 2 ==> (; true ; i++)                            ==> vòng lặp vô hạn
//     console.log(i);              // (var i=1; i>0; i++) điều kiện luôn đúng       gây treo trình duyệt
// }

//-------------------------------------------------------------------------

// var i = 1;                     var i = 1;                       var i = 0;
// for (; i <= 100 ; ){    ==>    for (; i <= 100 ; ){     ==>     for (; i<1000;){ 
//     console.log(i);               console.log(i);                   i++;
// }                                 i++;                              console.log(i);
// ==> treo trình duyệt            }                               }

//___________________________________________________________________________

// for (var i = 0, j = 10; i<=10; i++, j--){
//     var sum = i+ j;
//     console.log(i + ' + ' + j +' = ' +sum);
// }

 
//  for (k = 1; k<=10; k++){
//     var x = k*5;
//     document.write('5x'+k+'='+x);
//     document.write('<br/>');
//     }
//-------------------------------------------------------------------------------------

// break;      thoát ra khỏi vòng lặp, đi đến câu lệnh liền sau ==> áp dụng cho câu lệnh gần nhất

// var text = '';
// for (var i = 0; i < 5; i++) {
//     if (i===3) {
//         break;                              //    ==> dừng lặp khi i = 3
//     }                                           
// text += "The number is " + i + "<br>";
// }
// document.write(text);
//___________________________________________________________________________

//continue;          bỏ qua phần còn lại của vòng lặp để thực hiện lần lặp tiếp theo

// var text = '';
// for (var i = 0; i < 5; i++) {
//     if (i===3) {
//         continue;                              //    ==> bỏ qua lần lặp khi i = 3
//     }                                       //        để nhảy qua lần lặp khi i = 4   
// text += "The number is " + i + "<br>";
// }
// document.write(text);


//for/in________________________________________________________________________

// var person = {
//     name: 'Nhật',               
//     age: 29,                    //dùng để lấy giá trị của đối tượng
//     address: 'Huế'                  
// };
// for (var key in person){        //key: biến tự đặt
//     console.log(key);           //console.log(person[key])
// }



// var language = 'Javascript';
// for (var key in language){
//     console.log(key);               //lấy ra dạng số của chuỗi
// //     console.log(language[key]);     //lấy ra từng chữ của chuỗi
// }


//for/of________________________________________________________________

// var language = 'Javascript';          //value: biến tự đặt
// for (var key of language){          //lấy từng ký tự của chuỗi
//     console.log(key);
// }

// var languages = [
//     'Javascript',
//     'PHP',              
//     'Java',
// ];
// for (var value of languages){          //lấy từng ký tự của chuỗi
//     console.log(value);
// }


//forEach____________________________________________________________

// var animals = [
//     {
//         id: 1,
//         name: 'cat',
//         size: 'small'
//     },
//     {                                   //Lấy thông tin của đối tượng trong mảng
//         id: 2,                          //Mảng animals gồm 2 đối tượng (object) 
//         name: 'dog',
//         size: 'small'
//     }
// ]
// animals.forEach(function(animal){           //function(animal): hàm tự đặt
//     console.log(animal);
// })

// animals.forEach(do_something);
// function do_something(animal){           //Như trên nhưng = cách khác
//     console.log(animal);
// }

//------------------------------------------------

// var numbers = [1, 2, 3, 4, 5];
// // numbers.forEach(function(number) {
// //     console.log(number);
// // });
// numbers.forEach(myFunction)
// function myFunction(number) {
//     console.log(number);
// }

//---------------------------------------------------


// let sum = "";

// const numbers = [65, 44, 12, 4];

// numbers.forEach(myFunction);

// document.getElementById("demo").innerHTML = sum;    //sum="6544124"
//                                                     //chuỗi gồm các số nối lại

// function myFunction(item) {

//   sum += item;

// }