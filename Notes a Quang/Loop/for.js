/**
 /------ Giải thích
for(let i=0;i<10;i++){
    console.log(`${i}`);
}

//-- Giải thích
let i = 0
for(;i<10;i++){
    console.log(`${i}`);
}
// Ra cái gì?
let i = 0
for(;;i++){
    console.log(`${i}`);
    if(i>10){
        break;
    }
}
// Ra cái gì?
let i = 0
for(;;){
    console.log(`${i}`);
    if(i>10){
        break;
    }
    i++;
}
// Ra cái gì?
let i = 0
for(;;){
    console.log("a.....");
}
// Ra cái gì?
for (let i = 2; i <= 10; i++) {
    console.log(`${i}`);
    if (i % 2 != 0) {
        continue;
    }
}
/-- Ra mấy
for (let i = 2; i <= 10; i++) {
    if (i % 2 != 0) {
        continue;
    }
    console.log(`${i}`);
}
 */

for (let i = 2;i<=10 ; i+=2) {
    if (i % 2 == 0) {   // if đúng ko
        continue;
    }
    
    console.log(`${i}`);
}
// Thắng: 3, Thái: 3, Quang: 2.5, Nhung: 5
// Nhật 8, Nguyên 7, Long: 9, Long: 9
// Hải: 9, Hưng: 4, Phượng: 5