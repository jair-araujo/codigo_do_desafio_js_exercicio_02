let students = [
  {
    studentName: 'Jair',
    firstNote: 7,
    secondNote: 6
  },
  {
    studentName: 'Jake',
    firstNote: 9,
    secondNote: 10
  },
  {
    studentName: 'Maria',
    firstNote: 7,
    secondNote: 5
  },
  {
    studentName: 'Mayk',
    firstNote: 10,
    secondNote: 9
  },
  {
    studentName: 'Rodrigo',
    firstNote: 9,
    secondNote: 10
  }
];

let takeElement = document.getElementById('show-average');
students.forEach(student => {
  function average() {
    result = (student.firstNote + student.secondNote) / 2;
    return result;
  }

  function checkAverage() {
    if (average() >= 7) {
      let approved = 'Parabéns você foi Aprovado no concurso!!! 😉';
      showAverage = `A média das suas notas ${
        student.studentName
      } é ${average()} <br>${approved} <br>`;
    } else {
      let disapproved = 'Você foi Reprovado no concurso, Tente novamente! 😔';
      showAverage = `A média das suas notas ${
        student.studentName
      } é ${average()} <br> ${disapproved} <br>`;
    }
    takeElement.innerHTML += `${showAverage} <br>`;
  }
  checkAverage();
});
