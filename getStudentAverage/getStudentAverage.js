
StudentsData = [
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
];

function getStudentAverage(students) {

  let noteAccumulator = [];

  let gradesSum = 0;
  students.map((student) => {
    const { name } = student;
    const { grades } = student;

    for (let i = 0; i < grades.length; i++) {
      gradesSum += grades[i]
    }
    // console.log({gradesSum, grades});
 
    const studentOperator = (gradesSum / grades.length).toFixed(2);
    const studentAverage = parseFloat(studentOperator)

    noteAccumulator.push({ name, grades: studentAverage });
    gradesSum = 0;
  })

  const newDataStudents = noteAccumulator;

let dataAccumulatorGrades = 0
let contador = 0

newDataStudents.map((dataStudent) => {
  const { grades } = dataStudent;
  dataAccumulatorGrades += grades
  contador += 1
})
// console.log(dataAccumulatorGrades)
const noteAverage = (dataAccumulatorGrades / contador).toFixed(2);
const StudentsNoteAverage = parseFloat(noteAverage);

return {
  classAverage: StudentsNoteAverage,
  students: newDataStudents
}}






