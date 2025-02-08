const table = document.querySelector("#table");
const render = document.querySelector(".render");

let carts = JSON.parse(localStorage.getItem("carts")) ?? [];

const updateBtn = document.createElement("button");
updateBtn.innerText = "Cập nhật giỏ hàng";

const deleteBtn = document.createElement("button");
deleteBtn.innerText = "Xoá giỏ hàng";

function save() {
    localStorage.setItem("carts", JSON.stringify(carts));
}

function renderList() {
    if (carts.length === 0) {
        render.innerText = "Giỏ hàng không có sản phẩm nào";
        return;
    } else {
        render.innerText = "";
    }

    let sum = 0;
    let sumQnt = 0;

    // Lặp qua giỏ hàng và tính tổng tiền và tổng số lượng
    carts.forEach((cart) => {
        sum += cart.price * cart.qnt;
        sumQnt += cart.qnt;
    });

    const cartsTable = document.createElement("table");
    cartsTable.className = "new_table";

    const bodyTable = carts
        .map((cart, i) => {
            return `
            <tr data-id="${i}">
                <td>${i + 1}</td>
                <td>${cart.sp}</td>
                <td>${cart.price} VND</td>
                <td><input type="number" value="${cart.qnt}" min="1" /></td>
                <td>${(cart.price * cart.qnt).toFixed(2)} VND</td>
                <td><button class="remove-item">Xoá</button></td>
            </tr>
        `;
        })
        .join("");

    cartsTable.innerHTML = `
        <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Xoá</th>
        </tr>
        ${bodyTable}

        <tr>
            <td colspan="3">Tổng</td>
            <td>${sumQnt}</td>
            <td colspan="2">${sum.toFixed(2)} VND</td>
        </tr>
    `;

    render.append(cartsTable, updateBtn, deleteBtn);
}

renderList();
save();

updateBtn.onclick = function () {
    const check = confirm("Bạn có muốn cập nhật không?");

    if (check) {
        const quantities = document.querySelectorAll('input[type="number"]');
        quantities.forEach((input, i) => {
            // Kiểm tra nếu giá trị nhập vào không phải là số, đặt mặc định là 1
            const newQuantity = parseInt(input.value);
            if (!isNaN(newQuantity) && newQuantity > 0) {
                carts[i].qnt = newQuantity;
            }
        });

        renderList();
        save();
    }
};

deleteBtn.onclick = function () {
    const check = confirm("Bạn có muốn xoá hết giỏ hàng không?");

    if (check) {
        carts.splice(0, carts.length);
        renderList();
        save();
    }
};

let active = null;

table.onclick = function (e) {
    if (e.target.matches(".btn")) {
        const parent1 = e.target.parentElement;
        const parent2 = e.target.parentElement.parentElement;

        let qnt = parseInt(parent1.querySelector('input[name="number"]').value); // Chuyển thành số nguyên
        const sp = parent2.querySelector("td[data-sp]").innerText;
        const price = parseFloat(parent2.querySelector("td[data-price]").innerText); // Chuyển thành số thực

        if (qnt <= 0) qnt = 1; // Đảm bảo số lượng là dương
        const existingCart = carts.find((cart) => cart.sp === sp);

        if (existingCart) {
            existingCart.qnt += qnt;
        } else {
            carts.push({ sp, price, qnt });
        }

        save();
        renderList();
    }
};

// Xoá sản phẩm khỏi giỏ hàng
render.onclick = function (e) {
    if (e.target.matches(".remove-item")) {
        const parentRow = e.target.closest('tr');
        const cartIndex = +parentRow.dataset.id;
        const check = confirm("Bạn có muốn xoá sản phẩm này khỏi giỏ hàng không?");

        if (check) {
            carts.splice(cartIndex, 1);
            renderList();
            save();
        }
    }
};
