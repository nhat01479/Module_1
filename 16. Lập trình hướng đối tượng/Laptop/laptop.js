class Laptop{
    constructor(img, name, cost, gift, monitor, cpu, card, pin, weight){
        this.img = img;
        this.name = name;
        this.cost = cost;
        this.gift = gift;
        this.monitor = monitor;
        this.cpu = cpu;
        this.card = card;
        this.pin = pin;
        this.weight = weight;
    }
}
let laptops = [
    new Laptop('https://cdn.tgdd.vn/Products/Images/44/287769/lenovo-ideapad-3-15iau7-i3-82rk005lvn-2-1.jpg','Lenovo Ideapad 3',10990000,100000, '15.6 inches', 'i3, 1215U, 1.2Ghz', 'Intel UHD', '45Wh','1.63 kg' ),
    new Laptop('https://cdn.tgdd.vn/Products/Images/44/287769/lenovo-ideapad-3-15iau7-i3-82rk005lvn-2-1.jpg','Lenovo Ideapad 3',10990000,100000, '15.6 inches', 'i3, 1215U, 1.2Ghz', 'Intel UHD', '45Wh','1.63 kg' ),
    new Laptop('https://cdn.tgdd.vn/Products/Images/44/287769/lenovo-ideapad-3-15iau7-i3-82rk005lvn-2-1.jpg','Lenovo Ideapad 3',10990000,100000, '15.6 inches', 'i3, 1215U, 1.2Ghz', 'Intel UHD', '45Wh','1.63 kg' ),
];
function renderLaptop(){
    let row=document.querySelector('.row');
    for (let lap of laptops) {
        row.innerHTML += `
        <div class="laptop">
            <div class='laptop-img'>
                <img class='img' src="${lap.img}" alt="">
            </div>
            <div class='detail'>
                <p>${lap.name}</p>
                <p><input class='input' type="text" value="RAM 8G" disabled>
                   <input class='input' type="text" value="SSD 256GB" disabled>
                </p>
                <p>${lap.cost}</p>
                <p>Quà + ${lap.gift}</p>
                <p>Màn hình: ${lap.monitor} inches</p>
                <p>CPU: ${lap.cpu}</p>
                <p>Card: ${lap.card}</p>
                <p>Pin: ${lap.pin}</p>
                <p>Khối lượng: ${lap.weight} kg</p>
            </div>
            
        </div>
        `
    }
}
renderLaptop();