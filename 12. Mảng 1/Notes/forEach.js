//forEach____________________________________________________________

var animals = [
    {
        id: 1,
        name: 'cat',
        size: 'small'
    },
    {                                   //Lấy thông tin của đối tượng trong mảng
        id: 2,                          //Mảng animals gồm 2 đối tượng (object) 
        name: 'dog',
        size: 'small'
    }
]
animals.forEach(function(animal){           //function(animal): hàm tự đặt, call back function
    console.log(animal);
})

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