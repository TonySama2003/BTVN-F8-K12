const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const firstNumber = $("#firstNumber");
const secondNumber = $("#secondNumber");
const calculationResult = $("#calculationResult");

const add = $("#add");
const subtract = $("#subtract");
const multiply = $("#multiply");
const divide = $("#divide");

const btn = $(".btn");

let calc = null;

// Lắng nghe sự kiện thay đổi trên các nút radio và tính toán tương ứng
$("#operation-form").onclick = function (e) {
    calc = null;

    if (e.target.closest('label[for="add"]')) {
        calc = +firstNumber.value + +secondNumber.value;
    }

    if (e.target.closest('label[for="subtract"]')) {
        calc = +firstNumber.value - +secondNumber.value;
    }

    if (e.target.closest('label[for="multiply"]')) {
        calc = +firstNumber.value * +secondNumber.value;
    }

    if (e.target.closest('label[for="divide"]')) {
        if (+secondNumber.value === 0) return alert("Không thể chia cho 0");

        calc = +firstNumber.value / +secondNumber.value;
    }
};

function validate(n) {
    return +n === +n && typeof +n === "number";
}

btn.onclick = function (e) {
    e.preventDefault();

    // Kiểm tra nhập liệu
    if (!validate(firstNumber.value) || !validate(secondNumber.value)) {
        return alert("Bạn cần nhập số hợp lệ để tính toán.");
    }

    if (firstNumber.value === "" || secondNumber.value === "") {
        return alert("Hãy nhập số vào cả hai ô.");
    }

    if (calc === null) {
        return alert("Hãy chọn phép tính để tính toán.");
    }

    // Hiển thị kết quả
    calculationResult.value = calc;
};
