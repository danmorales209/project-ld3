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
      var newRow = $(`<tr>`);
      newRow.append($(`<td><input id="updateName" class='form-control' value="${data[i].assignmentName}"></td>`));
      newRow.append($(`<td><input id="updateSubject" class='form-control' value="${data[i].subjectName}"></td>`));
      newRow.append($(`<td><input id="updateDue" class='form-control' value="${data[i].dueDate}"></td>`));
      newRow.append($(`<td><input id="updatePoints" class='form-control' value="${data[i].maxPoints}"></td>`));
      newRow.append($(`<button data-id="${data[i].id}" class='saveChanges btn btn-primary'>Save Changes</button>`));
      newRow.append($(`<button data-id="${data[i].id}" class='grade btn btn-primary'>Grade</button>`));
      $("tbody").append(newRow);
    }
    $(".grade").on("click", function (event) {
      event.preventDefault();
      console.log("click grade");
      localStorage.setItem("assignID", $(this).data("id"));
      window.location.replace("/gradeAssign");
    });
  });
  $(document).on("click", ".saveChanges", function (event) {
    event.preventDefault();
    var updateAssign = {
      assignmentName: $("#updateName").val().trim(),
      maxPoints: $("#updatePoints").val().trim(),
      dueDate: $("#updateDue").val().trim(),
      subjectName: $("#updateSubject").val().trim(),
    };
    var id = $(this).attr('data-id');
    console.log(id);


    $.ajax({
      method: 'PUT',
      url: "/api/assignments/" + id,
      data: updateAssign
    }).then(function (data) {
      location.reload();
      console.log(data);
    })

  });
});
