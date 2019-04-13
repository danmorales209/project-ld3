var printGrades = function (sid) {
  $.get("/api/students/" + sid).then(function (data) {

    $("#studentNameDisplay").text(data.name);

    var $tableBody = $("#studentTable");
    $tableBody.empty();

    for (var i = 0; i < data.Grades.length; i++) {

      var newRow = $("<tr>");

      newRow.append(`<td>${data.Grades[i].Assignment.assignmentName}</td>`);

      var inputCell = $("<td>")
        .css({
          "display": "inline-block",
        });

      inputCell.append($("<input>")
        .attr("id", "A-" + data.Grades[i].Assignment.id)
        .addClass("mx-2 grade")
        .val(data.Grades[i].gradeValue)
      );

      var editButton = $("<button>")
        .addClass("btn btn-secondary mx-2 editButton")
        .attr({
          "data-sid": sid,
          "data-aid": data.Grades[i].Assignment.id,
        })
        .text("Edit");

      inputCell.append(editButton);

      newRow.append(inputCell);
      $tableBody.append(newRow);

    }

    $(".editButton").on("click", function (event) {

      event.preventDefault();

      var studentId = $(this).data("sid");
      var assignmentId = $(this).data("aid");
      var newGrade = Number($(this).siblings(".grade").val().trim());

      $.ajax({
        method: "PUT",
        url: "/api/grades/" + studentId + "/" + assignmentId,
        data: { gradeValue: newGrade }
      }).then(function (data) {
        console.log(data);
      });

    });
  });
}

$(document).ready(function () {

  $.get("/api/students").then(function (data) {
    for (var i = 0; i < data.length; i++) {
      var newOption = $("#individualStudentChoices");

      var newDiv = $("<div>");

      newDiv.attr("data-id", data[i].id)
        .addClass("clickme text-center")
        .text(data[i].name);

      newOption.append(newDiv);
      if (data[i + 1]) {
        newOption.append($("<hr>")
          .addClass("my-1"));
      }
    }
  });


  if (sessionStorage.getItem("sid")) {

    var studentID = sessionStorage.getItem("sid");
    sessionStorage.removeItem("sid");
    printGrades(studentID);
  }

  $("#individualStudentChoices").on("click", " .clickme", function () {
    var studentID = $(this).data("id");

    printGrades(studentID);

  });

});