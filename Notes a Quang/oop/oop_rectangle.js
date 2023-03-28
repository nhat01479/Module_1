class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width*this.height;
    }
    getPrimiter(){
        return (this.width + this.height)*2;
    }

}

let r1 = new Rectangle(4,5);
let r2 = new Rectangle(1,2);
let r3 = new Rectangle(3,6);

let rectangles = [r1, r2, r3]

// console.log(r1.getArea());
// console.log(r2.getArea());
// console.log(r3.getArea());
for(let i=0;i<rectangles.length;i++){
    console.log(rectangles[i].getArea());
}
