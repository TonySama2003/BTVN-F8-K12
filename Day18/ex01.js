// Utility function to validate positive numbers
const isPositiveNumber = (value) => typeof value === "number" && !isNaN(value) && value > 0;

/** Bài 1: Tính thuế thu nhập cá nhân */
const calculatePersonalIncomeTax = (salary) => {
  if (!isPositiveNumber(salary)) {
    alert("Dữ liệu không hợp lệ");
    return;
  }

  const taxBrackets = [11, 25, 50, 80]; // Các ngưỡng thuế
  const taxRates = [0.05, 0.1, 0.2, 0.3]; // Tương ứng phần trăm thuế ở mỗi ngưỡng
  let totalTax = 0;

  for (let i = taxBrackets.length - 1; i >= 0; i--) {
    if (salary > taxBrackets[i]) {
      totalTax += (salary - taxBrackets[i]) * taxRates[i];
      salary = taxBrackets[i];
    }
  }

  alert(`Thuế thu nhập cá nhân: ${totalTax.toFixed(2)} triệu`);
};

const userSalary = parseFloat(prompt("Lương (triệu):"));
calculatePersonalIncomeTax(userSalary);

/** Bài 2: Tính tiền điện */
const calculateElectricityBill = (electricityUsage) => {
  if (!isPositiveNumber(electricityUsage)) {
    alert("Dữ liệu không hợp lệ");
    return;
  }

  const usageThresholds = [50, 100, 200, 300, 400]; // Ngưỡng sử dụng điện
  const electricityRates = [1678, 1734, 2014, 2536, 2834, 2927]; // Giá tiền theo từng ngưỡng
  let totalBill = 0;

  for (let i = usageThresholds.length; i >= 0; i--) {
    if (electricityUsage > (usageThresholds[i - 1] || 0)) {
      totalBill += (electricityUsage - (usageThresholds[i - 1] || 0)) * electricityRates[i];
      electricityUsage = usageThresholds[i - 1] || 0;
    }
  }

  alert(`Tiền điện: ${totalBill.toLocaleString()} VNĐ`);
};

const userElectricityUsage = parseFloat(prompt("Số kWh sử dụng:"));
calculateElectricityBill(userElectricityUsage);

/** Bài 3: Kiểm tra tam giác vuông */
const checkRightTriangle = (sideA, sideB, sideC) => {
  if (![sideA, sideB, sideC].every(isPositiveNumber) || sideA + sideB <= sideC || sideB + sideC <= sideA || sideC + sideA <= sideB) {
    alert("Dữ liệu không hợp lệ");
    return;
  }

  const [shortSide1, shortSide2, longSide] = [sideA, sideB, sideC].sort((a, b) => a - b); // Sắp xếp các cạnh
  if (shortSide1 ** 2 + shortSide2 ** 2 === longSide ** 2) {
    alert("Là tam giác vuông");
  } else {
    alert("Không là tam giác vuông");
  }
};

const sideA = parseFloat(prompt("Độ dài cạnh a của tam giác:"));
const sideB = parseFloat(prompt("Độ dài cạnh b của tam giác:"));
const sideC = parseFloat(prompt("Độ dài cạnh c của tam giác:"));
checkRightTriangle(sideA, sideB, sideC);

/** Bài 4: Tính chỉ số BMI */
const calculateBMI = (weight, height) => {
  if (!isPositiveNumber(weight) || !isPositiveNumber(height)) {
    alert("Dữ liệu không hợp lệ");
    return;
  }

  const bmiValue = weight / height ** 2;

  let result = "Béo phì";
  if (bmiValue < 18.5) result = "Thiếu cân";
  else if (bmiValue < 23) result = "Bình thường";
  else if (bmiValue < 25) result = "Thừa cân";

  alert(`Chỉ số BMI: ${bmiValue.toFixed(2)} - ${result}`);
};

const userWeight = parseFloat(prompt("Cân nặng (kg):"));
const userHeight = parseFloat(prompt("Chiều cao (m):"));
calculateBMI(userWeight, userHeight);
