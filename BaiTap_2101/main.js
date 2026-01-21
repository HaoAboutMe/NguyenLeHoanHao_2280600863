//Bài tập 1: Khai báo constructor function Product

function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = function() {
        return quantity > 0;
    };
}

//Bài tập số 2: Tạo mãng ít nhất 6 sản phẩm thuộc 2 danh mục khác nhau
let arrayProducts = []

let product1 = new Product(1, "Product 1", 30000000, 5, "Category 1");
let product2 = new Product(2, "Product 2", 18000000, 0, "Category 1");
let product3 = new Product(3, "Product 3", 500000, 2, "Accessories");
let product4 = new Product(4, "Product 4", 20000000, 4, "Accessories");
let product5 = new Product(5, "Product 5", 300000, 10, "Category 1");
let product6 = new Product(6, "Product 6", 1000000, 0, "Accessories");
arrayProducts.push(product1);
arrayProducts.push(product2);
arrayProducts.push(product3);
arrayProducts.push(product4);
arrayProducts.push(product5);
arrayProducts.push(product6);

console.log("2/ Danh sách sản phẩm:");
console.log(arrayProducts);
console.log("");

//Bài tập 3
let result = arrayProducts.map(
    function(e) {
        return {
            name: e.name,
            price: e.price,
            // isAvailable: e.isAvailable()
        }
    }
)

console.log("3/ Danh sách sản phẩm với tên và giá:");
console.log(result);
console.log("");

//Bài tập 4
result = arrayProducts.filter(
    function(e) {
        return e.quantity > 0;
    }
)
console.log("4/ Danh sách sản phẩm còn hàng:");
console.log(result);
console.log("");

//Bài tập 5: Kiểm tra xem mảng có sản phẩm nào trên 30 triệu hay không?
result = arrayProducts.some(
    function(e) {
        return e.price > 30000000;
    }
)
console.log("5/ Có sản phẩm nào trên 30 triệu hay không?");
console.log(result ? "Có sản phẩm trên 30 triệu" : "Không có sản phẩm trên 30 triệu");
console.log("");

//Bài tập 6: kiểm tra xem các sản phẩm có danh mục là "Accessories" có đang được isAvailable hay không?
result = arrayProducts.filter(
    function(e) {
        return e.category == "Accessories";
    }
).every(
    function(e) {
        return e.isAvailable();
    }
)
console.log("6/ Tất cả sản phẩm trong danh mục Accessories có còn hàng hay không?");
console.log(result ? "Tất cả sản phẩm trong danh mục Accessories đều còn hàng" : "Không phải tất cả sản phẩm trong danh mục Accessories đều còn hàng");
console.log("");

//Bài tập 7: Tính tổng giá trị hàng tồn kho (price * quantity)
result = arrayProducts.reduce(
    function(sum, e) {
        return sum + (e.price * e.quantity);
    }, 0
)

console.log("7/ Tổng giá trị hàng tồn kho:");
console.log(result);
console.log("");

//Bài tập 8:
console.log("8/ In thông tin từng sản phẩm theo định dạng:");
for(const element of arrayProducts) {
    console.log(`${element.name} - ${element.category} - ${element.isAvailable() ? "Còn hàng" : "Hết hàng"}`);
}
console.log("");

//Bài tập 9: dùng for in để in ra tên thuộc tính và giá trị tương đương của từng sản phẩm
console.log("9/ In thông tin từng sản phẩm sử dụng for...in:");
for(const product of arrayProducts) {
    for(const key in product) {
        if(key !== "isAvailable") {
            console.log(`${key}: ${product[key]}`);
        }
        if(key === "isAvailable") {
            console.log(`${key}: ${product.isAvailable()}`);
        }
    }
    console.log("");
}
