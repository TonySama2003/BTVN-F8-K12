
// Bai 1: Hoán vị hai số không dùng biến trung gian

let a = 5;
let b = 3;


a = a + b;
b = a - b;
a = a - b;

console.log("a = " + a); 
console.log("b = " + b);

// Bai 2: Tìm số lớn nhất trong 3 số

let d = 5;
let f = 10;
let e = 3;

let max = Math.max(d, f, e);

console.log("Số lớn nhất là: " + max);


// Bai 3: Kiểm tra số nguyên tố

let g = 5;
let h = -3;

if (g * h > 0) {
    console.log("Hai số có cùng dấu.");
} else {
    console.log("Hai số không cùng dấu.");
}

// Bai 4: Sắp xếp 3 số theo thứ tự tăng dần

let x = 5;
let y = 3;
let c = 8;

if (x > y) {
    let temp = x;
    x = y;
    y = temp;
}

if (y > c) {
    let temp = y;
    y = c;
    c = temp;
} 

if (x > y) {
    let temp = x;
    x = y;
    y = temp;
}
console.log("Thứ tự tăng dần của 3 số là: " + a + ", " + b + ", " + c);
