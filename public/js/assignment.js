$(document).ready(function () {
    $("#submit").on("click", function (event) {
        event.preventDefault();
        var newAssign = {
            firstName: $("#assignmentName").val().trim(),
            secondName: $("#assignmentPoints").val().trim(),
            email: $("#assignmentDue").val().trim(),
            age: $("#assignmentSubject").val().trim(),
        };
        console.log(newAssign);
        // Send an AJAX POST-request with jQuery
        $.post("/api/assignments", newAssign)
            // On success, run the following code
            .then(function (d) {
                console.log(d);
            });
    });

    $("#edit").on("click", function (event) {
        event.preventDefault();


    });
    $("#grade").on("click", function (event) {
        event.preventDefault();
        window.location.replace("./gradeAssign");
    });

    $.get("/api/assignment", function (data) {
        for (var i = 0; i < data.length; i++) {
            var newRow = $("<tr>");
            newRow.append($("<td><input class='form-control' placeholder="+AssignmentName+"></td>"));
            newRow.append($("<td><input class='form-control' placeholder="+AssignmentDate+"></td>"));
            newRow.append($("<td><input class='form-control' placeholder="+AssignmentPoints+"></td>"));
            newRow.append($("<td><input class='form-control' placeholder="+AssignmentSubject+"></td>"));
            newRow.append($("<button type='submit' id='saveChanges' class='btn btn-primary'>Save Changes</button>"));
            newRow.append($("<button type='submit' id='grade' class='btn btn-primary'>Grade</button>"));
            $("tbody").append(newRow);
        }
    });
});