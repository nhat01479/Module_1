class InformationList{
    constructor(array){
        this.infor = array;
    }
    showList(){
        let data='';
        for (let i=0; i<this.infor.length; i++){
            data += `<tr>
            <td>${i}</td>
            <td>${this.infor.bookid}</td>
            <td>${this.infor.booktype}</td>
            <td>${this.infor.authorid}</td>
            <td>${this.infor.quantity}</td>
            <td>${this.infor.readerid}</td>
            <td>${this.infor.name}</td>
            <td>${this.infor.borrowedate}</td>
            <td>${this.infor.backdate}</td>
            <td><button type="button" onclick="deleteInfor">Chỉnh sửa</button><button type="'button">Xóa</button></td>
        </tr>`;
        }
        document.querySelector('.show-list').innerHTML = data;
    }

    }