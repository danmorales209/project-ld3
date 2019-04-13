$(document).ready(function () {

    $.get("/api/students").then(function (data) {
        for (var i = 0; i < data.length; i++) {
            var newOption = $("#individualStudentChoices");
            newOption.append($(`<div data-id=${data[i].id} class="clickme text-center">${data[i].name}</div><hr>`));
        }
    })



    $("#individualStudentChoices").on("click", "div.clickme", function () {
        var studentID = $(this).attr("data-id");

        $.get("/api/students/" + studentID).then(function (data) {
            $("#studentNameDisplay").text("Name: " + data.name)
            for (var i = 0; i < data.Grades.length; i++) {
                var $tableBody = $("#studentTable");
                var newRow = $("<tr>");
                newRow.append(`<td>${data.Grades[i].Assignment.assignmentName}</td>`)
                newRow.append(`<td>${data.Grades[i].gradeValue}</td>`)
                newRow.append(`<button class="btn btn-secondary editButton" data-id=${data.Grades[i].id} data-toggle="modal" data-target="#exampleModal">Edit</button>`)
                $tableBody.append(newRow);

            }
            $(".editButton").on("click", function (event) {
                event.preventDefault();
                var gradeID = $(this).attr("data-id");
                $("#modalHeader").text("Edit Grade for " + data.name)
                editGrade(data.Assignment.AssignmentId, gradeID);


            })
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