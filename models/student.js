module.exports = function (sequelize, DataTypes) {
  var Students = sequelize.define("Students", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    classNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },


  });
  Students.associate = function (models) {
    // We're saying that a Students should belong to an Assignment
    // A Students can't be created without an Assignment due to the foreign key constraint
    Students.belongsTo(models.Teachers);
  };

  return Students;
};
