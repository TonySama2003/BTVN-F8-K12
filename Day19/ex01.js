const isValidInput = (value) => !isNaN(value) && value > 0;

const getValidInput = () => {
  let n;
  while (true) {
    n = window.prompt("Nhập n:");
    if (!isValidInput(n)) {
      alert("Dữ liệu không hợp lệ, vui lòng nhập lại.");
    } else {
      return parseInt(n, 10);
    }
  }
};

const printPerfectSquares = (n) => {
  document.write(`Các số chính phương từ 1 tới ${n}: <br />`);
  for (let i = 1; i <= Math.sqrt(n); i++) {
    document.write(i ** 2 + "<br />");
  }
};

const n = getValidInput();
printPerfectSquares(n);