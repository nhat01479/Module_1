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
    // new Mobile('images/IP13P.jpg','iPhone 13 Pro', '6.1 inches', '1TB',25990000,'6GB', '12 MP', '3095'),
    // new Mobile('images/ss1.jpg','Samsung Galaxy S23 Ultra 5G', '6.8 inches', '256GB',26990000,'8GB', '200 MP & 12 MP', '5000'),
    // new Mobile('images/ss2.jpg','Samsung Galaxy S23 5G', '6.1 inches', '128GB',21990000,'8GB', '50 MP & 12 MP', '3900'),
    // new Mobile('images/ss3.jpg','Samsung Galaxy Z Fold3 5G', '7.6 & 6.2 inches', '512GB',27990000,'12GB', '3x12MP & 10 MP', '4400'),
    // new Mobile('images/xiaomi1.jpg','Xiaomi 13 Pro', '6.73 inches', '256GB',25990000,'12GB', '50MP & 32MP', '4820'),
    // new Mobile('images/xiaomi2.jpg','Xiaomi 12T', '6.67 inches', '256GB',12490000,'8GB', '108MP & 20MP', '5000'),
    // new Mobile('images/xiaomi3.jpg','Xiaomi 13', '6.36 inches', '256GB',18990000,'8GB', '50MP & 32MP', '4500')
 ];
// Hàm render sản phẩm ra màn hình
 function renderProduct(){
    document.querySelector('.body-product').innerHTML = '';

    for (let phone of mobiles){
        document.querySelector('.body-product').innerHTML +=
                    `<div class="product">

                        <div class="product-img">
                            <img id='img' src="${phone.img}" alt="">         
                        </div>

                        <div class='detail'>
                            <span class='name' style='color: blue;'>${phone.name}</span>                
                            <span>Màn hình: ${phone.monitor}</span>                
                            <span>Bộ nhớ: ${phone.memory}</span>                
                            <span class='cost' >Giá: ${phone.cost}</span>                
                            <span>RAM: ${phone.ram}</span>                
                            <span>Camera: ${phone.camera}</span>                
                            <span>Pin: ${phone.battery} mAh</span>                                                  
                        </div>
                        <button class='addtocart'>Mua ngay <i class="fa-sharp fa-solid fa-cart-plus"></i></button>
                    </div>`;
            }
 }
 renderProduct()
//Nút "Mua hàng"
// function showCart(){
//     let form = document.querySelector('.form');
//     form.style.display = 'block';
//  }


// function addToCart(){
//     document.querySelector('.form-input').innerHTML = '';
//     for (let phone of mobiles){
//         document.querySelector('.form-input').innerHTML = `
//         <div class="input">${phone.name} &nbsp; </div>
//                 <div>Giá: ${phone.cost} &nbsp;</div>
//                 <div><button class="remove-cart" type='button' style="width:40px">Xoá</button></div><br> 
//         `
//     }
// }

/*
const btn = document.querySelectorAll('button');
// console.log(btn);
btn.forEach(function(button,index){
    // console.log(button);
    button.addEventListener("click", function(evt){
        var btnItem = evt.target;
        var product = btnItem.parentElement;
        var productName = product.querySelector('.name').innerText;
        var productCost = product.querySelector('.cost').innerText;        
        addtoCart(productName,productCost)
    })
})
function addtoCart(productName,productCost){
    
}
 */