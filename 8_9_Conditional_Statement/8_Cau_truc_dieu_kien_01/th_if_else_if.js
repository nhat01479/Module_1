let username = prompt('Nhập tên người dùng');
if (username == 'Admin'){
        let password = prompt('Nhập mật khẩu');
    if (password=='TheMaster'){
        alert('Welcome');
    }       
    else {if (password == null){
        alert('Canceled');
    }
    else {
            alert('Wrong password');
        }
    }
}
else { if (username == null){
    alert('Canceld');
    }
    else {
        alert("I don't know you");
    }
}

