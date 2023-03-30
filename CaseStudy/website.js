class Mobile {
    constructor(img, name, monitor, memory, cost, ram, camera, battery){
        this.img = img;
        this.name = name;
        this.monitor = monitor;
        this.memory = memory;
        this.cost = cost;
        this.ram = ram;
        this.camera = camera;
        this.battery = battery
    }
}


 let mobiles = [
    new Mobile('images/IP14PMX.jpg','iPhone 14 Pro Max', '6.7 inches', '128GB',29900000,'6GB', '48MP & 12 MP', '4323'),
    new Mobile('images/IP14P.jpg','iPhone 14 Pro', '6.1 inches', '128GB',25490000,'6GB', '48MP & 12 MP', '3200'),
    new Mobile('images/IP14.jpg','iPhone 14', '6.1 inches', '128GB',21490000,'6GB', '12 MP', '3200'),
    new Mobile('images/IP13P.jpg','iPhone 13 Pro', '6.1 inches', '1TB',25990000,'6GB', '12 MP', '3095mAh'),
    new Mobile('images/IP13P.jpg','iPhone 13 Pro', '6.1 inches', '1TB',25990000,'6GB', '12 MP', '3095mAh')
 ]
 console.log(mobiles);
 function renderProduct(){
    let row = document.querySelector('.body-product');
    for (let phone of mobiles){
    row.innerHTML += `<div class="product">
                        <div class="product-img">
                            <img id='img' src="${phone.img}" alt="">         
                        </div>
                        <div class='detail'>
                            <p>Tên: ${phone.name}</p>                
                            <p>Màn hình: ${phone.monitor}</p>                
                            <p>Bộ nhớ: ${phone.memory}</p>                
                            <p>Giá: ${phone.cost}</p>                
                            <p>RAM: ${phone.ram}</p>                
                            <p>Camera: ${phone.camera}</p>                
                            <p>Pin: ${phone.battery} mAh</p> 
                            <p><button type='submit'>Mua ngay</button><p>
                        </div>
                    </div>`;
            }
 }
 renderProduct()

