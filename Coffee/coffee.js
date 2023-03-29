class Product {
    constructor(img, name, category, price){
        this.name = name;
        this.img = img;
        this.category = category;
        this.price = price;
    }
}
let products = [
    new Product('https://capherangxay.vn/wp-content/uploads/2018/07/1C6A6739-683x1024.jpg','SẢN PHẨM NGUYÊN CHẤT HẢO HẠNG','Cà phê nguyên chất Hạt Hảo Hạng 2 (Quyến rũ)',199000),
    new Product('https://capherangxay.vn/wp-content/uploads/2018/07/1C6A6746-683x1024.jpg','SẢN PHẨM NGUYÊN CHẤT HẢO HẠNG','Cà phê nguyên chất Hạt Thượng Hạng 2 (Tuyệt hảo)',319000),
    new Product('https://capherangxay.vn/wp-content/uploads/2018/07/1C6A6750-683x1024.jpg','SẢN PHẨM NGUYÊN CHẤT','Cà phê nguyên chất Xay GU 1 (Đậm đà)',159000),
    new Product('https://capherangxay.vn/wp-content/uploads/2018/07/1C6A6754-683x1024.jpg','SẢN PHẨM NGUYÊN CHẤT','Cà phê nguyên chất Hạt CULI (đặc biệt)',169000),
];
function renderProduct(){
    let row = document.querySelector('.row');
    // for (let i=0; i<products.length; i++) {
    //     row.innerHTML += 
    //     `<div class='product'>
	// 			<div class="product-img">
	// 				<img class='img' src="${products[i].img}"alt=""/>
	// 			</div>
	// 			<p class='category'>${products[i].category}</p>
	// 			<p class='name'>${products[i].name}</p>
	// 			<p class='price'>${products[i].price}</p>
	// 	</div>`
    // }
    for (let coffee of products){
        row.innerHTML += 
        `<div class='product'>
        		<div class="product-img">
        			<img class='img' src="${coffee.img}"alt=""/>
                    <p class='quickview'>Xem nhanh</p>
        		</div>                
        		<p class='category'>${coffee.category}</p>
        		<p class='name'>${coffee.name}</p>
        		<p class='price'>${formatCurrency(coffee.price)}</p>
	    </div>`
    }
}
function formatCurrency(number){
    return number.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'});
}
renderProduct()