// Add vào giỏ hàng

const btn = document.querySelectorAll('button');    //Lấy tất cả các nút
btn.forEach(function(button,index){
    button.addEventListener("click", function(evt){
        var btnItem = evt.target;                   //click vào nút nào thì target vào đó
        var product = btnItem.parentElement;        //Chọn phần tử cha của nút vừa click vào
        var productName = product.querySelector('.name').innerText; //lấy innerText của phần tử con đầu tiên có class ".name" và gán vào biến productName
        var productCost = product.querySelector('.cost').innerText;
        addtoCart(productName,productCost)      //gọi hàm addtoCart
    })
})

// Hàm addtoCart

function addtoCart(productName,productCost){
    var addtr = document.createElement('tr'); //tạo thêm 1 dòng
    var trcontent = `<tr><td>${productName}</td><td style="text-align: center;"><span>${productCost}</span><sup>đ</sup></td><td style="text-align: center;"><input type="number" min="1" value="1" style="width:30px; text-align: center;"></td><td style="text-align: right;"><button class="remove-cart" type='button' style="width:40px">Xoá</button></td></tr>`;
    addtr.innerHTML = trcontent; //dòng đó có nội dung bằng trcontent
    var cartTable = document.querySelector('tbody');
    cartTable.append(addtr) //append add thêm 1 dòng tr vào phía dưới của tbody

    totalCart()

};
//Hàm tính tổng tiền
function totalCart(){
    var cartItem = document.querySelectorAll('tbody tr');
    var totalC = 0;
    // console.log(cartItem.length);
    for (var i=0; i<cartItem.length; i++){
        var productQuantity = cartItem[i].querySelector("input").value    //Do số lượng nằm trong thẻ input
        var productCost = cartItem[i].querySelector("span").innerHTML        //Do giá nằm trong thẻ span
        var totalProductCost = productQuantity * productCost;
        totalC += totalProductCost;
    }
    let c = document.querySelector('.totalCart span')
    c.innerHTML = totalC;
    console.log(totalC);
}
 