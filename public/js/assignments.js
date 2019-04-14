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
        location.reload();
        console.log(d);
      });
  });
  $.get("/api/assignments", function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var newRow = $(`<tr class="bg-transparent">`);
      newRow.append($(`<td><input id="updateName-${data[i].id}" class='form-control' value="${data[i].assignmentName}"></td>`));
      newRow.append($(`<td><input id="updateSubject-${data[i].id}"" class='form-control' value="${data[i].subjectName}"></td>`));
      newRow.append($(`<td><input id="updateDue-${data[i].id}"" class='form-control' value="${data[i].dueDate}"></td>`));
      newRow.append($(`<td><input id="updatePoints-${data[i].id}"" class='form-control' value="${data[i].maxPoints}"></td>`));
      newRow.append($(`<button data-assignid="${data[i].id}" class='saveChanges btn btn-primary m-1'>Edit</button>`));
      newRow.append($(`<button data-id="${data[i].id}" class='grade btn btn-warning m-1'>Grade</button>`));
      $("tbody").append(newRow);
    }
    $(".grade").on("click", function (event) {
      event.preventDefault();
      console.log("click grade");
      localStorage.setItem("assignID", $(this).data("id"));
      window.location.replace("/gradeAssign");
    });
    $(".saveChanges").on("click", function (event) {
      event.preventDefault();
      var assignment = $(this).data("assignid");
      var name = $(`#updateName-${assignment}`).val().trim();
      var points = $(`#updatePoints-${assignment}`).val().trim();
      var date = $(`#updateDue-${assignment}`).val().trim();
      var subject = $(`#updateSubject-${assignment}`).val().trim();

      var updateAssign = {
        assignmentName: name,
        maxPoints: points,
        dueDate: date,
        subjectName: subject
      };
      console.log(updateAssign);
      var id = $(this).data('assignid');
      console.log(id);
      $.ajax({
        method: 'PUT',
        url: "/api/assignments/" + id,
        data: updateAssign
      }).then(function (data) {
        //location.reload();
        console.log(data);
      })

    });
  });
});

