/** Mảng --------------------------------------------------------
 * 
 - Là biến đặc biệt chứa được nhiều giá trị, mỗi giá trị là 1 phần tử

 - Các phần tử được lưu ở vị trí kế tiếp nhau, bắt đầu từ 0

 - Chứa được tất cả các kiểu dữ liệu trong JS
 (null, underfined, function, obj)
 
 - Khai báo mảng:

            Cách 1: n là độ dài của mảng
                var array_name = [phần tử 0, phần tử 1, ..., phần tử n-1];
            Cách 2: (không nên dùng)
                var array_name = new Array (phần tử 0, phần tử 1, ... phần tử n-1);

- typeof array = object

- Kiểm tra có phải array hay không: 

            Array.isArray(Đối tượng cần kiểm tra); ==> true/false

**/

// var  languages = [
//     'Javascript',           //0
//     'PHP',                  //1
//     'Ruby',                 //2
//     'Dart',                 //3
//     function () {},         //4
//     {},  // ==>kiểu object  //5
//     123                     //6
// ];
// console.log(Array.isArray(languages)); // true
// console.log(Array.isArray({})); // false

// // Lấy phần tử: chỉ mục (index) hoặc key

// console.log(languages[6]); //123
// console.log(languages[0]); //Javascript

//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

/** LÀM VIỆC VỚI MẢNG */


// var  languages = [
//     'Javascript',           //0
//     'PHP',                  //1
//     'Ruby',                 //2
//     'Dart',                 //3
// ];

// 1.toString() ______________________________________________________________________________________

// console.log(languages.toString());              // array.toString() :biến array thành chuỗi
                                                // Javascript,PHP,Ruby,Dart

// 2.join()  ________________________________________________________________________________
                                            
// console.log(languages.join(''));               //truyền vào giữa các phần tử 1 chuỗi
                                                // ('-') : Javascript-PHP-Ruby-Dart                             
                                                // (' ') : Javascript PHP Ruby Dart                             
                                                // ('') : JavascriptPHPRubyDart    
                                                // ()    : Javascript,PHP,Ruby,Dart
// 3. pop()_________________________________________________________________________


// xoá phần tử cuối mảng và trả về phần tử đã xóa
// khi mảng trống ==> trả về underfined
// console.log(languages.pop());   //Dart
// console.log(languages.pop());   //Ruby
// console.log(languages.pop());   //PHP
// console.log(languages.pop());   //Javascript
// console.log(languages);         //[] xóa hết rồi nên mảng rỗng
// console.log(languages.pop());   //underfined

// 4. push()________________________________________________________________________



// thêm phần tử mới vào CUỐI MẢNG và trả về ĐỘ DÀI mới của mảng

// console.log(languages.push('Java', 'python')); //6



// 6. shift: ngược với pop()________________________________________________________________________


// Xóa phần tử đầu mảng và trả về phần tử đầu mảng

// console.log(languages.shift()) // Javascript
// console.log(languages)         // languages = ['PHP', 'Ruby', 'Dart']



// 7. unshift: ngược với push() __________________________________________

// thêm phần tử mới vào ĐẦU MẢNG và trả về ĐỘ DÀI  mới của mảng

// console.log(languages.unshift('python'))  //5
// console.log(languages);                   // languages = ['python', 'Javascript', 'PHP', 'Ruby', 'Dart']



// 8. splice (splicing) ____________________________________________________________________________________

// xóa, cắt, chèn phần tử mới vào mảng


// var  languages = [
//     'Javascript',           //0
//     'PHP',                  //1
//     'Ruby',                 //2
//     'Dart',                 //3
// ];

//------------xóa---------------

    // languages.splice(1, 2)          //Bắt đầu từ vị trí số 1, xóa đi 2 phần tử

    // console.log(languages);         //['Javascript', 'Dart']


//----------chèn vào -------------

    //  languages.splice(1, 0, 'python')       //Thêm phần tử 'Dart' vào vị trí số 1

    // console.log(languages);                 //['Javascript', 'python', 'PHP', 'Ruby', 'Dart']

//------------vừa chèn vừa xóa------------------

    // languages.splice(1, 1, 'python')        //Xóa phần tử ở vị trí số 1 rồi chèn vào đó phần tử 'python'

    // console.log(languages);                 //['Javascript', 'python', 'Ruby', 'Dart']


// 9.concat()_____________________________________________________

// nối mảng

    // var languages = [
    //     'Javascript',           
    //     'PHP',                  
    //     'Ruby'
    // ]
    // var languages2 = [
    //     'Dart',
    //     'Java'
    // ]

    
    // console.log(languages.concat(languages2));  // ['Javascript', 'PHP', 'Ruby', 'Dart', 'Java']
    // console.log(languages)                      // ['Javascript', 'PHP', 'Ruby']


// 10. slice (slicing)_______________________________________________________
                
// var languages = [
//         'Javascript',  //0            0
//         'PHP',         //1           -1     
//         'Ruby'         //2           -2
//     ];

    // console.log(languages.slice(1, 2));  //Từ vị trí 1, cắt đến trước phần tử 2
    //                                      //['PHP']
    // console.log(languages)               //['Javascript', 'PHP', 'Ruby']

    // console.log(languages.slice(1));    //Cắt từ vị trí 1 đến hết mảng
    //                                     //['PHP', 'Ruby']
    // console.log(languages.slice(0));    //Cắt từ vị trí 0 đến hết mảng ==> copy mảng

    // console.log(languages.slice(-2, -1))  //['PHP']


// // Đảo ngược mảng
//     var a = [1,2,3];
//     a.reverse();
//     console.log(a); //[3, 2, 1]

// 11. indexOf_____________________________________________________________________

// Lấy ra vị trí của ký tự trong chuỗi và vị trí của phần tử trong mảng
// trả về -1 nếu giá trị không được tìm thấy

    var str = 'language';
    var index = str.indexOf('g');
    console.log(index);       //3

    var num = [1,3,5,5,9];
    var a = num.indexOf(5);     // trả về vị trí của lần xuất hiện đầu tiên
    console.log(a);             //2