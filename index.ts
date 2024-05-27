interface stud  {
    name:string;
    issenior:boolean;
    age:number;
}
let student:stud[] = [
    {
    name:"Kinza",
    issenior:true,
    age:35
},
{
    name:"Faiza",
    issenior:false,
    age:54
},
{
    name:"Maryam",
    issenior:true,
    age:25
},
{
    name:"Nida",
    issenior:false,
    age:30
},
];
function senirorStudent(student:stud[]){
    return student.filter(student => student.issenior);
}
student = senirorStudent(student);
console.log(student);
