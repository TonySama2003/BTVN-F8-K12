const students = [
    { name: "Nguyen Van A", score: 9 },
    { name: "Tran Thi B", score: 7 },
    { name: "Le Van C", score: 5 },
    { name: "Pham Thi D", score: 3 },
    { name: "Doan Van E", score: 10 },
    { name: "Hoang Thi F", score: 6 },
];

const result = {
    group: {
        A: [],
        B: [],
        C: [],
        D: [],
    },
    highest: students[0],
    lowest: students[0],
};

for (const student of students) {
    // Kiểm tra sinh viên có điểm cao nhất và thấp nhất
    if (result.lowest.score > student.score) result.lowest = student;
    if (result.highest.score < student.score) result.highest = student;

    // Sử dụng switch để phân loại nhóm điểm
    switch (true) {
        case student.score < 4:
            result.group.D.push(student);
            break;
        case student.score < 6:
            result.group.C.push(student);
            break;
        case student.score < 8:
            result.group.B.push(student);
            break;
        default:
            result.group.A.push(student);
    }
}

console.log(result);
