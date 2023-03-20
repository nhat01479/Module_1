/**
Xếp loại điểm học lực cấp 3
8<= dtb < 10 : giỏi
5<= dtb < 8: Khá
0<= dtb <5: Yếu

Nâng cấp:
9<= dtb < 10 : Xuất sắc
8<= dtb < 9: Giỏi
7<= dtb < 8: Khá
5<= dtb < 7: Trung bình
0<= dtb <5: Yếu
------------------------------------------- */
// let dtb = 8.5;
// if (dtb>=9 && dtb<=10) 
//     console.log('Xuất sắc');
// else if (dtb>=8 && dtb <9)
//         console.log('Giỏi');
//     else if (dtb>=7 && dtb<8)
//             console.log('Khá');
//         else if (dtb>=5 && dtb<7)
//                 console.log('Trung bình');
//              else if (dtb<5 && dtb>=0)
//                      console.log('Yếu');
//                   else console.log('Nhập sai điểm');


/**
 /--------------Câu lệnh if
    let dtb = 15;

    if(dtb >= 8 && dtb < 10){
        console.log("Giỏi");
    }
    if(dtb >= 5 && dtb < 8){
        console.log("Khá");
    }
    if(dtb >=0 && dtb <5){
        console.log("Yếu");
    }
    // false && true => false
    if(dtb <0 || dtb >10){
        console.log("Diem khong hop le");
    }
/------------Câu lệnh if else basic
    if(a>0){
        console.log("Số dương");
    }
    if(a<0){
        console.log("Số âm");
    }


    if(a>0){
        console.log("Số dương");
    }else{
        console.log("Số âm");
    }

/------------------If else
if(dtb >= 8 && dtb <=10){
    console.log("Giỏi");
}else{
    if(dtb >= 5 && dtb <8){
        console.log("Khá");
    }else{
        if(dtb >=0 && dtb <5){
            console.log("Yếu");
        }else{
            console.log("Điểm không hợp lệ");
        }
    }
}
 */



/**
Xếp loại điểm học lực cấp 3
8<= dtb <= 10 : giỏi
5<= dtb < 8: Khá
0<= dtb <5: Yếu
 */

// let dtb = 15;



// if(dtb >= 8 && dtb <=10){
//     console.log("Giỏi");
// }else if(dtb >= 5 && dtb <8){
//     console.log("Khá");
// }else if(dtb >=0 && dtb <5){
//     console.log("Yếu");
// }else{
//     console.log("Điểm không hợp lệ");
// }