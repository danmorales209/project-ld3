module.exports = function (sequelize, DataTypes) {
  var Assignment = sequelize.define("Assignment", {
    assignmentName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subjectName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    maxPoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    dueDate: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  Assignment.associate = function (models) {
    Assignment.hasMany(models.Grades);
  };
  return Assignment;
};
