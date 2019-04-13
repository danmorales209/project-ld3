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



  $("#individualStudentChoices").on("click", " .clickme", function () {
    var studentID = $(this).data("id");

    $.get("/api/students/" + studentID).then(function (data) {

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
            "data-sid": studentID,
            "data-aid": data.Grades[i].Assignment.id,
            // "data-toggle": "modal",
            // "data-target": "#exampleModal"
          })
          .text("Edit");

        inputCell.append(editButton);

        // inputCell.append(`<button class="btn btn-secondary mx-2 editButton" data-id=${data.Grades[i].id} data-toggle="modal" data-target="#exampleModal">Edit</button>`);

        newRow.append(inputCell);
        //newRow.append(`<td>${data.Grades[i].gradeValue}</td>`)
        // newRow.append(`<button class="btn btn-secondary editButton" data-id=${data.Grades[i].id} data-toggle="modal" data-target="#exampleModal">Edit</button>`)
        $tableBody.append(newRow);

      }
      $(".editButton").on("click", function (event) {
        /* event.preventDefault();
        var gradeID = $(this).attr("data-id");
        $("#modalHeader").text("Edit Grade for " + data.name)
        editGrade(data.Assignment.AssignmentId, gradeID); */

        event.preventDefault();

        var studentId = $(this).data("sid");
        var assignmentId = $(this).data("aid");
        var newGrade = Number($(this).siblings(".grade").val().trim());
        console.log("PUT");

        $.ajax({
          method: "PUT",
          url: "/api/grades/"+studentId+"/"+assignmentId,
          data: {gradeValue: newGrade}
        }).then( function(data) {
          console.log(data);
        })


      });
    })
  })
});

function editGrade(data, gradeID) {
  $("#newGradeButton").on("click", function (event) {
    event.preventDefault();
    var newGrade = Number($("#newGrade").val().trim());
    if (newGrade < 0) {
      console.log("New grade must be a number higher than zero")
    } else {
      $.post(`/api/grades/${data}`, { gradeValue: newGrade }).then()
    }
  })
}