module.exports = function (sequelize, DataTypes) {
  var Grades = sequelize.define("Grades", {
    gradeValue: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
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
