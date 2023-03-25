
// var course = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 0
//     },
//     {
//         id: 2,
//         name: 'Java',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Python',
//         coin: 0
//     }
// ];

// function courseHandler(course) {         // trả về cái gì thì mảng mới sẽ có cái đó
//     return  {                                     // trả về đối tượng (object)
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: `Gia: ${course.coin}`                            //chỉ số 0, 1, 2... vị trí của các phần tử trong mảng
//     }
// }
//                                                 //courseHandler gọi là hàm callback
// var newCourses = course.map(courseHandler);      //map() sẽ duyệt qua từng phần tử của mảng course  
//                                                 //khi duyệt qua mỗi phần tử sẽ gọi hàm đã truyền vào map()
// console.log(newCourses);                        //trả về 1 mảng gồm 3 phần tủ
//----------------------Kết quả--------------------------------------------------------------------------------
//  newCourses = [
//     {
//         id: 1,                           //số lượng phần tử của newCourses sẽ bằng với course
//         name: 'Khoa hoc: Javascript',
//         coin: 'Gia: 0'                   // Ở đây là 3 elements                                       
//     },                                   //sử dụng map phải có 1 đối số truyền vào
//     {
//         id: 2,
//         name: 'Khoa hoc: Java',     dùng map() để thay đổi các phần tử trong mảng
//         coin: 'Gia: 0'
//     },
//     {
//         id: 3,
//         name: 'Khoa hoc: Python',
//         coin: 'Gia: 0'
//     }
// ] 



//đối số ở đây phải là 1 hàm, không truyền sẽ bị lỗi
          



var persons = [
    {
        id: 1,
        name: 'Nhật',
        year: 1994,
        address: 'Huế'
    },
    {
        id: 2,
        name: 'Minh',
        year: 1991,
        address: 'Hà Nội'
    },
    {
        id: 3,
        name: 'Nguyễn',
        year: 2000,
        address: 'Sài Gòn'
    }
];
var person = persons.map(myFunction);
function myFunction(persons) {
    return {
        id: 'STT: ' + persons.id,
        name: 'Tên: ' + persons.name,
        year: 'Năm sinh: ' + persons.year,
        address: 'Địa chỉ: ' + persons.address
    }
}
console.log(person);
//------Chỉ lấy name-------
var names = persons.map(function(persons) {
    return persons.name
})
console.log(names);
//---------------------------------------------------------------------

// var newperson = persons.map(function(persons) {
//     return {
//                 id: 'STT: ' + persons.id,
//                 name: 'Tên: ' + persons.name,
//                 year: 'Năm sinh: ' + persons.year,
//                 address: 'Địa chỉ: ' + persons.address
//             }
// }
// )
//-----------------------Chỉnh sửa 1 phần tử -----------------------------

// var newperson = persons.map(function(people) {
//     if (people.id == 1) {
//         people.id = 100;
//         people.name = 'Ocean' ;
//         people.year = 20;
//         people.address = 'Earth';
//     }               
//     return people 
// });

//-------------------------------------------------------------------


// console.log(newperson);





/*________________________________________Ví dụ khác______________________________________________

//Trả về mảng diện tích hình vuông dựa vào mảng độ dài các cạnh

var a = [2,3,4,5];

//    var a_area = a.map(squareF)
//    function squareF(x) {
//     return x*x
//    };

//-------------------Như trên nhưng = cách khác-----------------------

// var a_area = a.map(function(x) {
//     return x*x
// });

//--------------------Rút gọn callback function---------------------------

var a_area = a.map(x => x*x)

//-----------------------------------------------

console.log(a_area);
*/

