/* Tạo mảng số thực trong đoạn min-max

var a = Array(20);
    for (i=0; i<a.length; i++){
a[i] = parseFloat(((Math.random() * (max - min)) + min).toFixed(2))
}

*/

/* Tạo mảng số nguyên trong đoạn min-max

let array = Array(10);
for (i = 0; i < array.length; i++) {
  array[i] = Math.floor(Math.random()*(max - min + 1) + min);
}

*/

/*
let array = Array(10);
for (i = 0; i < array.length; i++) {
  array[i] = Math.floor(Math.random() * 100 + Math.random() * -100);
}

*/
/*

let a = Array(10);
for (i = 0; i < a.length; i++) {
  a[i] = Math.floor(Math.random() * 100)
}


/*

let array = [];
for (i = 0; i < 5; i++) {
  let rnd = Math.floor(Math.random() * 26 + 97);
  let chacrnd = String.fromCharCode(rnd);
  array.push(rnd - 97, chacrnd);
}

*/