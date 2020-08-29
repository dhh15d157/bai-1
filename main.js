var fs = require('fs')
var a = fs.readFileSync("demo.txt","utf8",(error, data)=>{
    if (error){
        console.log("khong doc duoc file");
    } else {
        console.log("Noi dung:" + data);
    }
})
console.log(a);

var b = fs.writeFileSync("newFile.txt",a,(error,data)=>{
    if(error){
        console.log("loi ghi file");
    } else {
        console.log("ghi file thanh cong");
    }
})
console.log(b);

/* Bài 2:
 - Tạo một file demo.txt, có nội dung như sau: Chúc mừng bạn đã ghi file thành công.
-  Tạo môt file test.txt
- Hãy đọc file demo.txt và mình chuyển toàn bộ nội dung của file demo.txt, vào file newFile.txt, 

Lưu ý: Giá trị ghi vào file newFile.txt phải đợi kết quả của đọc file.

 */ 