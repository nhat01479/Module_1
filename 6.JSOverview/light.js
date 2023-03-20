function controlLight() {
    let switchbtn = document.getElementById('light')
        turnbtn = document.getElementById('turn');
    if (turnbtn.innerText=="Turn On"){
        switchbtn.src="images/pic_bulbon.gif";
        turnbtn.innerText="Turn Off";
    }
    else{
        switchbtn.src="images/pic_bulboff.gif";
        turnbtn.innerText="Turn On";
    }
}

// function controlLight(){
//     if(document.getElementById('turn').innerText=="Turn On")
//     {
//         document.getElementById('light').src='images/pic_bulbon.gif';
//         document.getElementById('turn').innerText='Turn Off';
//     }
//     else
//     {
//         document.getElementById('light').src='images/pic_bulboff.gif';
//         document.getElementById('turn').innerText='Turn On';
//     }
// }

function controlL(){
    var getIdswitch = document.getElementById('switch')
if(document.getElementById('switch').innerText == 'Turn On'){
    document.getElementsByClassName('lightt')[0].src = 'images/pic_bulbon.gif';
    getIdswitch.innerText = 'Turn Off';
    getIdswitch.classList.add('turnOff');
    getIdswitch.classList.remove('turnOn');
}
else{
    document.getElementsByClassName('lightt')[0].src = 'images/pic_bulboff.gif';
    getIdswitch.innerText = 'Turn On';
    getIdswitch.classList.add('turnOn');
    getIdswitch.classList.remove('turnOff');
}
}



// function controlL(){
// if(document.getElementById('switch').innerText == 'Turn On'){
//     document.getElementsByClassName('lightt')[0].src = 'images/pic_bulbon.gif';
//     document.getElementById('switch').innerText = 'Turn Off';
//     document.getElementById('switch').classList.add('turnOff');
//     document.getElementById('switch').classList.remove('turnOn');
// }
// else{
//     document.getElementsByClassName('lightt')[0].src = 'images/pic_bulboff.gif';
//     document.getElementById('switch').innerText = 'Turn On';
//     document.getElementById('switch').classList.add('turnOn');
//     document.getElementById('switch').classList.remove('turnOff');
// }
// }










