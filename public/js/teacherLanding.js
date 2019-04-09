$(document).ready(function () {
  let url = "/api/students";
  $.get(url).then(function (response) {
    let students = response;
    let overallGrade = [];

    students.forEach(student => {

      if (student.Grades.length > 0) {
        overallGrade.push(student.Grades.reduce((sum, grade) => {
          return sum + (grade.gradeValue / grade.Assignment.maxPoints);
        }, 0));
      }
      else {
        overallGrade.push(0);
      }
      


      console.log(studentGrade);


      let idParagraph = $("<p>")
        .text(student.id)
        .addClass("col-3 display-5")
        .appendTo($("#display-students"));

      let nameParagraph = $("<p>")
        .text(student.name)
        .addClass("col-9 display-5")
        .appendTo($("#display-students"));
    });

    console.log(overallGrade);

    var ctx = document.getElementById("myChart").getContext('2d');
    var chart = new Chart(ctx, {
      type: 'bar',

      data: {
        labels: students.map(student => student.name),
        datasets: [{
          label: "Some Data",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
          data: students.map(student => student.grade)
        }]
      },

      options: {}
    });

  });

});