class Iformation{
    constructor(bookid, booktype, authorid, quantity, readerid, name, borrowedate, backdate){
        this.bookid = bookid;
        this.booktype = booktype;
        this.authorid = authorid;
        this.quantity = quantity;
        this.readerid = readerid;
        this.name = name;
        this.borrowedate = borrowedate;
        this.backdate = backdate;
    }
    getBookId(){
        return this.bookid;
    }
    getBookType(){
        return this.booktype;
    }
    getAuthorId(){
        return this.authorid;
    }
    getQuantity(){
        return this.quantity;
    }
    getReaderId(){
        return this.readerid;
    }
    getName(){
        return this.name;
    }
    getBorroweDate(){
        return this.borrowedate;
    }
    getBackDate(){
        return this.backdate;
    }
    /***/
    setBookId(bookid){
        this.bookid;
    }
    setBookType(booktype){
        this.booktype;
    }
    setAuthorId(authorid){
        this.authorid;
    }
    setQuantity(quantity){
        this.quantity;
    }
    setReaderId(readerid){
        this.readerid;
    }
    setName(name){
        this.name;
    }
    setBorroweDate(borrowedate){
        this.borrowedate;
    }
    setBackDate(backdate){
        this.backdate;
    }

    editIformation(bookid, booktype, authorid, quantity, readerid, name, borrowedate, backdate){
        this.bookid = bookid;
        this.booktype = booktype;
        this.authorid = authorid;
        this.quantity = quantity;
        this.readerid = readerid;
        this.name = name;
        this.borrowedate = borrowedate;
        this.backdate = backdate;
    }
}