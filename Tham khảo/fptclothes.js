let shop = [
    {
        name: "JACKET",
        voucher: "add",
        brand: "Saint Laurent",
        price: "50$",
        priceSale: "20$",
        photo: "https://saint-laurent.dam.kering.com/m/1bf4b1b1bb5d6d1c/Medium-735686Y7E631000_A.jpg?v=2",
        hashtag: ["Best saler", "Voucher +"],
        color: ["Black", "White"],
        size: ["42", "43", "44", "45"]
    },
    {
        name: "PANTS",
        voucher: "add",
        brand: "Gucci",
        price: "70$",
        priceSale: "40$",
        photo: "https://saint-laurent.dam.kering.com/m/6d0dac6ef2e3b436/Medium-737998Y512W1000_A.jpg?v=3",
        hashtag: ["Best saler", "Voucher +"],
        color: ["Black", "White"],
        size: ["42", "43", "44", "45"]
    },
    {
        name: "NECK SHIRT",
        voucher: "add",
        brand: "Saint Laurent",
        price: "110$",
        priceSale: "80$",
        photo: "https://saint-laurent.dam.kering.com/m/3ac4d21160383c49/Medium-732473Y065W1000_A.jpg?v=2",
        hashtag: ["Best saler", "Voucher +"],
        color: ["Black", "White"],
        size: ["42","43", "44", "45"]
    }
]
for (let i = 0; i < shop.length; i++) {
    document.body.innerHTML += `
    <div class="area">
        <span class="voucher"> ${shop[i].voucher} </span>
        <img width="180px", heigh="230px" src="${shop[i].photo}" alt="">
        <h3 class="brand">${shop[i].brand}</h3>
        <h4>Item : ${shop[i].name}</h4>
        <div>
            <span class="hashtag">${shop[i].hashtag[0]}</span>
            <span class="hashtag">${shop[i].hashtag[1]}</span>
        </div>
        <p>Select color: ${shop[i].color.length}, 
        Select size: ${shop[i].size.length}
        </p>
        <p>Price: ${shop[i].price} /item</p>
        <h4 class="priceSale">Price sale: ${shop[i].priceSale} /item</h4>
        <button id="buy">Click Buy</button>
        
    </div>
    `
}