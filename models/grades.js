module.exports = function (sequelize, DataTypes) {
  var Grades = sequelize.define("Grades", {
    gradeValue: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });
  Grades.associate = function (models) {
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
