let points = [40, 100, 1, 5, 25, 10]
points.sort(function(a, b) {
    return a - b
})
document.write(points + "<br>");

points.sort(function(a, b) {
    return b - a
})
document.write(points);



// Theo mặc định, phương thức sort() sẽ so sánh các phần tử theo trật tự của các ký tự trong bảng chữ cái.

// let arr = ["Toyota", "Subaru", "BMW"]
// arr.sort() // [ "Toyota", "Subaru", "BMW" ]


//Hàm so sánh có 2 tham số-------------------------------------------------------------------------------
/*
Hàm so sánh trả về giá trị kiểu số: 
âm (nhỏ hơn 0), dương (lớn hơn 0) và 0.
âm có nghĩa là phần tử đầu nhỏ hơn phần tử sau
dương có nghĩa là phần tử đầu lớn hơn phần tử sau
0 có nghĩa là 2 phần tử bằng nhau
*/
//-----------------------------------------------------------------------------------------------

//Hàm đảo ngược mảng

// let arr = ["Toyota", "Subaru", "BMW"]
// document.write(arr.sort() + "<br>") 
// document.write(arr.reverse()) 