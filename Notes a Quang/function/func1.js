// Viết hàm tìm số lớn nhất trong mảng
/**
 Tên hàm: findMaxInArray
 Tham số: mảng các số
 Trả về: số lớn nhất
 */

 function findMaxInArray(numbers){
    let max = numbers[0];
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>max){
            max = numbers[i];
        }
    }
    return max;
 }

 let arr = [4,7,9,1];
 let max = findMaxInArray(arr);

 console.log(max);


 // Viết kiểm tra số nguyên tố
 /**
  Tên hàm: isPrime
  Tham số: number
Trả về: true/false
  */
 function isPrime(number){
    let check = true;
    if(number<=1){
        check= false;
    }
    for(let i=2;i<number-1;i++){
        if(number%i==0){
            check = false;
        }
    }
    return check;
 }

 let check = isPrime(13);

 console.log(check);