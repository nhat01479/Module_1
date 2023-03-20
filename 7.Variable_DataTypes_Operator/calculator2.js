
// var myArray= [
//     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.', '=', '+', '-', '*', '/', '(', ')', '%', 'AC'
// ];
// for (var i = 0; i<20; i++) {
//     console.log(myArray[i]);
// }
//------------------------------------------------------
let view = document.getElementById('result');              // eval(): đánh giá một biểu thức được đưa vào dưới dạng một chuỗi
function handleClick(value){                               //         trả về kết quả       
    view.value += value;                                   //  let   result = eval("2 + 3 * 5");
}                                                          //  console.log(result);                                  
function handleReset(){                                    //  Output: 17
    view.value = 0;
}
function handleResult(){
    let result = eval(view.value)
    view.value = result;
}

//--------------------------------------------------------