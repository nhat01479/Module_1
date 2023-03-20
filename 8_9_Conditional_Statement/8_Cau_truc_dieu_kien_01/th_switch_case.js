// let browser=prompt('Enter browser name!');
// switch(browser){
//     case "Edge":
//         alert("You've got the Edge!");
//         break;
//     case "Chrome":
//     case "Firefox":
//     case "Safari":
//     case "Opera":
//         alert('Okay we support these browser too');
//         break;
//     default:
//         alert('We hope that this page look ok!');        
// }

// let a = prompt('a?', '');
// switch (a){
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
// }

// let a = prompt('Nhập số', 0);
// if (a>0) alert(1);
// else if (a<0) alert(-1);
//     else alert(0);

// let a = prompt('Nhập số');
// switch (a==0){
//     case true:
//         alert(0);
//         break;
//     case false:
//         switch(a>0){
//             case true:
//                 alert(1);
//                 break;
//             case false:
//                 alert(-1);
//                 break;
//         }        
//     }   
            

let a = (prompt('Nhập số'));              
switch (a==0 ? 0 : a>0 ? 1 : a<0 ? -1 : NaN)  {              //Toán tử 3 ngôi lồng nhau
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);                           
        break;   
    case -1:
        alert(-1);
        break;
    default:
        alert('Not a number');
}    


// let b = (prompt('Nhập số'));              
// switch (Math.sign(b))  {              //Toán tử 3 ngôi lồng nhau
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);                           
//         break;   
//     case -1:
//         alert(-1);
//         break;
//     default:
//         alert('Not a number');
// } 

