$(document).ready(function () {
  let url = "/api/students";

  $.get(url).then(function (response) {
    let students = response;
    let overallGrade = [];

    students.forEach((student, index) => {

      if (student.Grades.length > 0) {
        let totalScore = student.Grades.length;

        overallGrade.push(student.Grades.reduce((sum, grade) => {
          return sum + (grade.gradeValue / grade.Assignment.maxPoints);
        }, 0) / totalScore * 100);
      }

      else {
        overallGrade.push(0);
      }

      let studentRow = $("<tr>");

      studentRow.append($("<td>")
        .addClass("display-5")
        .text(student.id));

      studentRow.append($("<td>")
        .addClass("display-5")
        .text(student.name));

      studentRow.append($("<td>")
        .text(
          formatGrade(overallGrade[index])
        )
      );

      studentRow.append($("<td>")
        .append($("<button class='btn btn-secondary'>")
          .addClass("student-grades")
          .text("See Grades")
          .attr("sid", student.id)
        )
      );

      $("#display-students").append(studentRow);
    });

    $(".student-grades").on("click", function (e){
      e.preventDefault();
      sessionStorage.setItem("sid",$(this).attr("sid"));
      window.location.replace("/student");
      
    });

    var ctx = document.getElementById("myChart").getContext('2d');
    var chart = new Chart(ctx, {
      type: 'horizontalBar',

      data: {
        labels: students.map(student => student.name),
        datasets: [{
          label: "Student Data",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
          data: overallGrade
        }]
      },

      responsive: true,

      options: {
        legend: {
          position: "right"
        },
        scales: {
          xAxes: [{
            id: "Score",
            position: "left",
            ticks: {
              suggestedMin: 0,
              suggestedMax: 100
            }
          }]
        }
      }
    });

  });

});

var formatGrade = function (value) {
  let letterGrade = "";

  if (value >= 97) {
    letterGrade = "A+";
  }

  else if (value >= 93) {
    letterGrade = "A";
  }

  else if (value >= 90) {
    letterGrade = "A-";
  }

  else if (value >= 87) {
    letterGrade = "B+";
  }

  else if (value >= 83) {
    letterGrade = "B";
  }

  else if (value >= 80) {
    letterGrade = "B-";
  }

  else if (value >= 77) {
    letterGrade = "C+";
  }

  else if (value >= 73) {
    letterGrade = "C";
  }

  else if (value >= 70) {
    letterGrade = "C-";
  }

  else if (value >= 67) {
    letterGrade = "D+";
  }

  else if (value >= 63) {
    letterGrade = "D";
  }

  else if (value >= 60) {
    letterGrade = "D-";
  }

  else {
    letterGrade = "F";
  }

  return letterGrade;
}