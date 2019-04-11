$.get("/api/grades/" + localStorage.getItem("assignID"), function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var newRow = $(`<tr>`);
        newRow.append($(`<td><span id="studentName">${data[i].Student.name}</span></td>`));
        newRow.append($(`<td><span id="assignmentId">${data[i].Assignment.assignmentName}</span></td>`));
        newRow.append($(`<td><input id="gradePoints" class='form-control' value="${data[i].gradeValue}"></td>`));
        newRow.append($(`<button data-id="${data[i].id}" data-studentId="${data[i].StudentId}" data-assignId="${data[i].AssignmentId}"
         class='gradeUpdate' btn btn-primary'>Update</button>`));
        $("tbody").append(newRow);
    }

    $(".gradeUpdate").on("click", function (event) {
        var gradeUpdate = {
            AssignmentId: $(this).data("assignId"),
            StudentId: $(this).data("StudentId"),
            gradeValue: $(this).prev().val().trim()
        }
        $.post("/api/grades", gradeUpdate)
            .then(function (d) {
                location.reload();
                console.log(d);
            });

    });
});

