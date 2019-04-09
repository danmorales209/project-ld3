$(document).ready(function () {
  $("#newAssign").on("click", function (event) {
    event.preventDefault();
    var newAssign = {
      assignmentName: $("#assignmentName").val().trim(),
      maxPoints: $("#assignmentPoints").val().trim(),
      dueDate: $("#assignmentDue").val().trim(),
      subjectName: $("#assignmentSubject").val().trim(),
    };
    console.log(newAssign);
    // Send an AJAX POST-request with jQuery
    $.post("/api/assignments", newAssign)

      .then(function (d) {
        console.log(d);
      });
  });
  $("#grade").on("click", function (event) {
    event.preventDefault();
    window.location.replace("./gradeAssign.html");
  });
  $.get("/api/assignments", function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var newRow = $("<tr>");
      newRow.append($(`<td><input class='form-control' value="${data[i].assignmentName}"></td>`));
      newRow.append($(`<td><input class='form-control' value="${data[i].subjectName}"></td>`));
      newRow.append($(`<td><input class='form-control' value="${data[i].dueDate}"></td>`));
      newRow.append($(`<td><input class='form-control' value="${data[i].maxPoints}"></td>`));
      newRow.append($(`<button type='submit' id='saveChanges' class='btn btn-primary'>Save Changes</button>`));
      newRow.append($(`<button type='submit' id='grade' class='btn btn-primary'>Grade</button>`));
      $("tbody").append(newRow);
    }
  });
});