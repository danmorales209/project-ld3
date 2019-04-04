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

  });
  return Assignment;
};
