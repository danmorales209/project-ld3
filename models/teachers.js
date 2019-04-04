module.exports = function (sequelize, DataTypes) {
  var Teachers = sequelize.define("Teachers", {
    TeachersName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    classRoom: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });


  Teachers.associate = function (models) {
    // We're saying that a Teachers should belong to an Assignment
    // A Teachers can't be created without an Assignment due to the foreign key constraint
    Teachers.hasMany(models.Students);
  };
  return Teachers;
};
