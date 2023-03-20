// Tính điểm
function Tinhdiem(){
    let diemly=prompt('Điểm Lý');
    let diemhoa=prompt('Điểm Hóa');
    let diemsinh=prompt('Điểm Sinh');
    let ly=parseInt(diemly);
    let hoa=parseInt(diemhoa);
    let sinh=parseInt(diemsinh);
    let dtb=(ly+hoa+sinh)/3;
    let tong=ly+hoa+sinh;
    document.getElementById('dtb').innerHTML="Điểm trung bình là: " + dtb;
    document.getElementById('tong').innerHTML="Tổng điểm là: " + tong;
}

// Chuyển đổi nhiệt độ


function CtoF(){
    let doC = document.getElementById('nhapdoC').value;
    let F = (9*doC/5 + 32);
    document.getElementById('doFF').innerHTML=F;
}

// function FtoC(){
//     let doF = document.getElementById('nhapdoF').value;
//     let C = 5*(doF-32)/9;
//     document.getElementById('doCC').innerHTML=C;
// }
    
// Diện tích và chu vi hình tròn
function do_something(){
    let radius=prompt('Bán kính');
    let S = radius*radius*3.14;
    let C = 2*radius*3.14;
    document.getElementById('dientich').innerHTML="Diện tích là: " + S;
    document.getElementById('chuvi').innerHTML="Chu vi là: " + C;
    document.getElementById('bankinh').innerHTML="Bán kính: " + radius;

}    
    