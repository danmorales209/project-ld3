$.get("/api/grades/" + localStorage.getItem("assignID"), function (data) {
    console.log(data);
    $("#assignmentName").text("Assignment: "+data[0].Assignment.assignmentName)
    for (var i = 0; i < data.length; i++) {
        var newRow = $(`<tr>`);
        newRow.append($(`<td><span id="studentName">${data[i].Student.name}</span></td>`));
        newRow.append($(`<td><span id="assignmentId">${data[i].Assignment.assignmentName}</span></td>`));
        newRow.append($(`<td><input id="gradePoints-${data[i].StudentId}-${data[i].AssignmentId}" class='form-control' value="${data[i].gradeValue}"></td>`));
        newRow.append($(`<td><button data-id="${data[i].id}" data-studentid="${data[i].StudentId}" data-assignid="${data[i].AssignmentId}"
         class='gradeUpdate btn btn-primary'>Update</button></td>`));
        $("tbody").append(newRow);
    }

    $(".gradeUpdate").on("click", function (event) {
        event.preventDefault();
        console.log("grade value clicked");
        var assignment = $(this).data("assignid");
        var student = $(this).data("studentid");
        var grade = $(`#gradePoints-${student}-${assignment}`).val().trim();

        var url = "/api/grades/" + student + "/" + assignment;
        console.log(url);
        $.ajax({
            method: 'PUT',
            url: url,
            data: { gradeValue: grade }
        }).then(function (data) {
            //location.reload();
            console.log(data);
        })

    });
});

