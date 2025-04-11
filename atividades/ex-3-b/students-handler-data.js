"use strict";
const e = React.createElement;

const formatAnswer = (students) => {
    return students.map(({ nome, notaBim1, notaBim2 }) => e("p", null, `${nome}: ${notaBim1} (bimestre 1) e ${notaBim2} (bimestre 2) = ${notaBim1 + notaBim2}`));
}

export const getAllStudents = (students) => {
    return formatAnswer(students);
}

export const getStudentsByGender = (students, gender) => {
    const studentsByGender = students.filter(({ sexo }) => sexo === gender);
    return formatAnswer(studentsByGender);
}

export const getDisapprovedStudents = (students) => {
    const disapprovedStudents = students.filter(({ notaBim1, notaBim2 }) => notaBim1 + notaBim2 <= 50);
    return formatAnswer(disapprovedStudents);
}

export const getApprovedStudents = (students) => {
    const approvedStudents = students.filter(({ notaBim1, notaBim2 }) => notaBim1 + notaBim2 > 50);
    return formatAnswer(approvedStudents);
}

export const areAllStudentsApproved = (students) => {
    const allStudentsAprovved = students.every(({ notaBim1, notaBim2 }) => notaBim1 + notaBim2 >= 50);
    const answerFormat = allStudentsAprovved ? "Sim" : "Não";
    return e("p", null, answerFormat);
}

export const getAverageGrade = (students) => {
    const totalGrades = students.reduce((acc, { notaBim1, notaBim2 }) => acc + notaBim1 + notaBim2, 0);
    const averageGrade = totalGrades / students.length;
    return e("p", null, `Nota média: ${averageGrade.toFixed(2)}`);
}


