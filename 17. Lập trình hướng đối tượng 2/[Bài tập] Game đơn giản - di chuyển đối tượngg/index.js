class Object{
    constructor(image, top, left, size){
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }
    getObjectElement(){
        return `<img src="${this.image}" style="width: ${this.size}%; top: ${this.top}px; left: ${this.left}px; position: absolute;">`
    }
    moveRight(){
        if (window.innerWidth - this.left - 2*this.size <= 0) { 
            let delta_left = window.innerWidth - this.left - this.size;
        return this.left = this.left + delta_left;
        }        
        else {
         return   this.left = this.left + 50;
        }
        // return this.left += 50;
    }
    moveLeft(){
        return this.left -= 50;
    }
    moveTop(){
        return this.top -= 50;
    }
    moveBottom(){
        return this.left += 50;
    }
}
let object = new Object('images/ball.png', 50, 0, 5);


function start(){
    // if(object.left < window.innerWidth - object.size){
      object.moveRight();
    // }
    document.getElementById('game').innerHTML = object.getObjectElement();
    setTimeout(start, 500)
  }


//   function callKey(evt) {                         
//     switch (evt.keyCode) {                      
//         case 37:
//             moveLeft();
//             break;
//         case 38:
//             moveTop()  ;
//             break; 
//         case 39:
//             moveRight()  ;
//             break;
//         case 40:
//             moveBottom()  ;
//             break;
//     }
// }

// window.onload = docReady() 

// function docReady() {        
//     addEventListener('keydown', callKey);    
// }
  
  start();

