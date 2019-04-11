// $("#studentDropDown").on("click", function (event) {
//     event.preventDefault();
//     $.get("/api/students", function (data) {
//     })
// });

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
            for (var i = 0; i < data.Grades.length; i++){
                console.log(data.Grades[i]);
                var $tableBody = $("#studentTable");
                var newRow = $("<tr>");
                // newRow.append(`<td>${data.name}</td>`);
                newRow.append(`<td>${data.Grades[i].Assignment.assignmentName}</td>`)
                newRow.append(`<td>${data.Grades[i].gradeValue}</td>`)
                newRow.append(`<button class="btn btn-secondary">Edit</button>`)
                $tableBody.append(newRow);
            }
            console.log(data.Grades[0].Assignment.assignmentName);
        })
    })
});
