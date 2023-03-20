// let a = parseInt(prompt('Nhập số a'));
// let b = parseInt(prompt('Nhập số b'));
// let c = a + b;
// if (c>4) alert('Below');
// else alert('Over');

// let a = parseInt(prompt('Nhập số a'));
// let b = parseInt(prompt('Nhập số b'));
// let c = a + b;
// c = c > 4 ? 'Over' : 'Below';
// document.write(c);


// switch (c > 4 ? 'Over' : 'Below') {
//     case 'Below':
//         alert('Below');
//         break;
//     case 'Over':
//         alert('Over')
//         break;
// }

// --------------------------------------------

let str = prompt('Nhập vào');
str = (str=='Employee' ? 'Hello' : (str == 'Dicrector') ? 'Greetings' : (str='') ? 'No login' : '');
alert(str);