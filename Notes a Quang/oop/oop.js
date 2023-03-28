/**
        let firstNameQ = "Dang";
        let lastNameQ = "Quang";

        let firtNameP = "Ha";
        let lastNameP = "Phuong";


        let personQ = {
            firstName : "Dang",
            lastName: "Quang"
        }
        let personP = {
            firstName: "Ha",
            lastName: "Phuong"
        }

        personQ.lastName = "Quangxx"
        console.log(personQ.lastName);


        // Định nghĩa lớp bằng từ khóa class
        class Person{
            constructor(firstName, lastName){
                // đối tượng có 2 thuộc tính là firstName, lastName
                // this là gì: đại diện cho đối tượng, mà đối tượng thì
                // có thuộc tính và phương thức nên this có thể truy cập và cập nhật
                this.firstName = firstName;
                this.lastName = lastName;
            }
            // hành vi - phương thức - method
            greeting(){
                return "Hello! tui là " + this.lastName;
            }
            // toString(): mô tả thông tin đối tượng
            toString(){
                return this.firstName + " - " + this.lastName;
            }
            setLastName(name){
                this.lastName = name;
            }
            getLastName(){
                return this.lastName;
            }
        }

        let personP = new Person("Ha", "Phuong");
        console.log(personP.greeting());
        console.log(personP.toString());

        personP.setLastName("Phượng Hồng");
        console.log(personP.toString());


        let personQ = new Person("Dang", "Quang");
        console.log(personQ.greeting());




        // Định nghĩa lớp mà dùng từ khóa funtion
        function Person(ho, ten){
            this.firstName = ho;
            this.lastName = ten;

            this.greeting = function(){
                return "Hello tui là " + this.lastName;
            }
            this.toString = function(){
                return this.firstName + " - "  + this.lastName;
            }
            this.setLastName = function(name){
                this.lastName = name;
            }
            this.getLastName = function(){
                return this.lastName;
            }
        }

        let personP = new Person("Ha", "Phuong");
        console.log(personP.greeting());
        console.log(personP.toString());


        // Tạo đối tượng Person mà không cần định nghĩa lớp - object literal
        // Nhớ cái này phổ biến
        let personP = {
            firstName: "Ha",
            lastName: "Phượng",
            greeting: function(){
                return "Hello tui là: " + this.lastName;
            }
        }
        console.log(personP.greeting());

        // Tạo đối tượng không cần định nghĩa lớp - Dùng cách Singleton
        let personP = new function(){
            this.firstName = "Hà";
            this.lastName = "Phượng"
            this.greeting = function(){
                return "Hello tui là: " + this.lastName;
            }
        }
        console.log(personP.greeting());

        // Sử dụng 1 số Lớp có sẵn của JavaScript
        let d1 = new Date();
        console.log(d1);

        console.log(d1.getMonth());
        console.log(d1.getFullYear());


        let arr = new Array();


        // 
        let a = (0.1 + 0.2) - 0.3 < Number.EPSILON;
        console.log(a);
        console.log(0.1+0.3);

        **/
        
        
       
        
        
        


        


        



