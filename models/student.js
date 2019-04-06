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
    Students.belongsTo(models.Teachers);
    Students.hasMany(models.Grades);
  };

  return Students;
};
