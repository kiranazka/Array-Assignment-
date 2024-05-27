var student = [
    {
        name: "Kinza",
        issenior: true,
        age: 35
    },
    {
        name: "Faiza",
        issenior: false,
        age: 54
    },
    {
        name: "Maryam",
        issenior: true,
        age: 25
    },
    {
        name: "Nida",
        issenior: false,
        age: 30
    },
];
function senirorStudent(student) {
    return student.filter(function (student) { return student.issenior; });
}
student = senirorStudent(student);
console.log(student);
