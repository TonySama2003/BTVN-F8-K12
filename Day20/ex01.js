const students = [
    { name: "Nguyen Van A", score: 9 },
    { name: "Tran Thi B", score: 7 },
    { name: "Le Van C", score: 5 },
    { name: "Pham Thi D", score: 3 },
    { name: "Doan Van E", score: 10 },
    { name: "Hoang Thi F", score: 6 },
];

const studentStats = {
    highest: students[0],
    lowest: students[0],
    group: {
        A: [],
        B: [],
        C: [],
        D: [],
    },
};

for (const student of students) {
    // Kiểm tra sinh viên có điểm cao nhất và thấp nhất
    if (studentStats.lowest.score > student.score) studentStats.lowest = student;
    if (studentStats.highest.score < student.score) studentStats.highest = student;

    // Sử dụng switch để phân loại nhóm điểm
    switch (true) {
        case student.score < 4:
            studentStats.group.D.push(student);
            break;
        case student.score < 6:
            studentStats.group.C.push(student);
            break;
        case student.score < 8:
            studentStats.group.B.push(student);
            break;
        default:
            studentStats.group.A.push(student);
    }
}

console.log(studentStats);
