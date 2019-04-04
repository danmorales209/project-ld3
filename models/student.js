module.exports = function (sequelize, DataTypes) {
  var Students = sequelize.define("Students", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    classNumber: {
      type: DataTypes.INTERGER,
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
  };

  return Students;
};
