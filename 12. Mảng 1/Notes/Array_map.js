var course = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0
    },
    {
        id: 2,
        name: 'Javascript',
        coin: 0
    },
    {
        id: 3,
        name: 'Javascript',
        coin: 0
    }
];

function courseHandler(course, index) {         // trả về cái gì thì mảng mới sẽ có cái đó
    return  {                                     // trả về đối tượng (object)
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: `Gia: ${course.coin}`,
        index: index                            //chỉ số 0, 1, 2... vị trí của các phần tử trong mảng
    }

}
                                                //courseHandler gọi là hàm callback
var newCourses = course.map(courseHandler);      //map() sẽ duyệt qua từng phần tử của mảng course  
                                                //khi duyệt qua mỗi phần tử sẽ gọi hàm đã truyền vào map()
console.log(newCourses);                        //trả về 1 mảng gồm 3 phần tủ

/* course = [
    {
        id: 1,                           //số lượng phần tử của newCourses sẽ bằng với course
        name: 'Khoa hoc: Javascript',
        coin: 'Gia: 0'                   // Ở đây là 3 elements                                       
    },                                   //sử dụng map phải có 1 đối số truyền vào
    {
        id: 2,
        name: 'Khoa hoc: Javascript',     dùng map() để thay đổi các phần tử trong mảng
        coin: 'Gia: 0'
    },
    {
        id: 3,
        name: 'Khoa hoc: Javascript',
        coin: 'Gia: 0'
    }
] 
*/


//đối số ở đây phải là 1 hàm, không truyền sẽ bị lỗi
                                      