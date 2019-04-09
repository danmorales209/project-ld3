$(document).ready(function () {
  let url = "/api/students";
  $.get(url).then(function (response) {
    let students = response;

    students.forEach(student => {
      let idParagraph = $("<p>")
        .text(student.id)
        .addClass("col-3 display-5")
        .appendTo($("#display-students"));

      let nameParagraph = $("<p>")
        .text(student.name)
        .addClass("col-9 display-5")
        .appendTo($("#display-students"));
    });

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

  // DUMMY DATA //

  /* let students = [
    { name: "Al", grade: .9 },
    { name: "Bill", grade: .2 },
    { name: "Casey", grade: .7 },
    { name: "Danielle", grade: .9 },
    { name: "Ele", grade: .2 },
    { name: "Fanny", grade: .9 },
    { name: "Gabby", grade: .9 }
  ]; */

  /* students.forEach((student, index) => {
    let idP = $("<p>")
      .text(index + 1)
      .addClass("col-3 display-5")
      .appendTo($("#display-students"));

    let nameP = $("<p>")
      .text(student.name)
      .addClass("col-9 display-5")
      .appendTo($("#display-students"));
  });

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
  }); */

});