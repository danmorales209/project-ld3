USE school_db;

INSERT INTO teachers (TeachersName, classRoom, createdAt, updatedAt)
VALUES
("Mrs. Frizzle", 101, now(), now());

INSERT INTO students 
(name, createdAt, updatedAt, TeacherId )
VALUES 
("Aaron",  now(), now(), 1),
("Betty",  now(), now(), 1),
("Casey",  now(), now(), 1),
("Dan",  now(), now(), 1),
("Elle",  now(), now(), 1);

INSERT INTO assignments
(assignmentName, subjectName, maxPoints, dueDate, createdAt, updatedAt)
VALUES
("Math Quiz 1", "Math", 100, now(), now(), now()),
("Science Quiz 1", "Science", 100, now(), now(), now()),
("History Paper 1", "History", 100, now(), now(), now()),
("Happy Poem", "English", 100, now(), now(), now()),
("Karate", "PE", 100, now(), now(), now());

INSERT INTO grades
(gradeValue, createdAt, updatedAt, AssignmentId, StudentId)
VALUES 
(90, now(), now(), 1, 1),
(90, now(), now(), 1, 2),
(90, now(), now(), 1, 3),
(90, now(), now(), 1, 4),
(90, now(), now(), 1, 5),
(90, now(), now(), 2, 1),
(90, now(), now(), 2, 2),
(90, now(), now(), 2, 3),
(90, now(), now(), 2, 4),
(90, now(), now(), 2, 5);
