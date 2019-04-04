module.exports = function (sequelize, DataTypes) {
  var Grades = sequelize.define("Grades", {
    gradeValue: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });



  Grades.associate = function (models) {
    // We're saying that a Grades should belong to an Assignment
    // A Grades can't be created without an Assignment due to the foreign key constraint
    Grades.belongsTo(models.Assignment, {
      foreignKey: {
        allowNull: false
      }
    });
    Grades.belongsTo(models.Students, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Grades;
};
