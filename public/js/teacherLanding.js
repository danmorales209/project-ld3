$(document).ready(function () {
  // let url = "/api/students/get";
  // $.get(url)

  // DUMMY DATA //

  let students = [
    "Al",
    "Bill",
    "Casey",
    "Danielle",
    "Ele",
    "Fanny",
    "Gabby",
  ];

  students.forEach((student, index) => {
    let idP = $("<p>")
      .text(index + 1)
      .addClass("col-3 display-5")
      .appendTo($("#display-students"));

    let nameP = $("<p>")
      .text(student)
      .addClass("col-9 display-5")
      .appendTo($("#display-students"));
  });

});