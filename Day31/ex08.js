// Hàm kiểm tra tính hợp lệ của các số nhập vào
function validate(n) {
    return typeof +n === "number" && !isNaN(+n) && +n > 0;
}

const totalInput = document.querySelector("#total");  // Sử dụng các id từ HTML mới
const peopleInput = document.querySelector("#people");
const tipInput = document.querySelector("#tip");
const resultDiv = document.querySelector(".result");
const btn = document.querySelector(".btn");

// Hàm xử lý tính toán và hiển thị kết quả
function renderTip() {
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const container = document.createElement("div");

    // Kiểm tra xem các trường có bị bỏ trống không
    if (totalInput.value === "" || peopleInput.value === "") {
        return alert("Hãy nhập đầy đủ Tổng hóa đơn và Số người chia.");
    }

    // Kiểm tra số tiền và số người chia có hợp lệ không
    if (+totalInput.value <= 0 || +peopleInput.value <= 0) {
        return alert("Tổng hóa đơn và số người chia cần lớn hơn 0.");
    }

    // Kiểm tra tính hợp lệ của các trường nhập liệu
    if (!validate(totalInput.value) || !validate(peopleInput.value) || 
        (tipInput.value !== "" && !validate(tipInput.value))) {
        return alert("Các trường cần nhập số hợp lệ.");
    }

    // Kiểm tra số người chia có phải là số nguyên không
    if (!Number.isInteger(+peopleInput.value)) {
        return alert("Số người chia cần là một số nguyên.");
    }

    // Kiểm tra tiền tip có hợp lệ không
    if (+tipInput.value > +totalInput.value) {
        return alert("Tiền tip không thể lớn hơn tổng hóa đơn.");
    }

    // Tính toán số tiền mỗi người cần trả và tổng tiền cần trả
    const totalWithTip = +totalInput.value + (+tipInput.value || 0);
    const amountPerPerson = totalWithTip / +peopleInput.value;

    // Hiển thị kết quả
    p1.innerText = `Mỗi người cần trả: ${amountPerPerson.toFixed(2)} VND`;
    p2.innerText = `Tổng số tiền cần trả: ${totalWithTip.toFixed(2)} VND`;

    container.append(p1, p2);
    resultDiv.innerHTML = '';  // Xóa kết quả cũ nếu có
    resultDiv.append(container);
    return container;
}

let active = null;

// Xử lý sự kiện khi người dùng nhấn nút Tính tiền
btn.onclick = function (e) {
    e.preventDefault();

    const contain = renderTip();

    // Nếu có kết quả tính toán trước đó, xóa đi
    if (active && active !== contain) {
        active.remove();
    }

    // Lưu lại kết quả hiện tại
    active = contain;
};
