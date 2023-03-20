
/*

if(months == 1 || months == 3 || months == 7){
    console.log("Tháng có 31 ngày");
}else{
    if(months==2){
        console.log("Tháng có 28 ngày");
    }else{
        if(months == 4 || months == 6 || months ==9 ){
            console.log("Tháng có 30 ngày");
        }else{
            console.log("Tháng không hợp lệ");
        }
    }
}
*/


//  switch case:
//  break: nếu không có break thì sẽ thực hiện tiếp các câu lệnh phía dưới;
//  default: giá trị mặc định nếu không có case nào được chọn;
 
// 1,3,5,7,8,10,12: 31 ngày
// 2: 28 ngày
// 4,6,9,11: 30 ngày
let month = 4;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Tháng " + month + " có 31 ngày");
        break;
    case 2:
        console.log("Tháng " + month + " có 28 ngày");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Tháng " + month + " có 30 ngày");
        break;
    default:
        console.log('Nhập sai tháng');
        break;
}




