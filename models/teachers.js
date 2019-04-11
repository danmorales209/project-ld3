module.exports = function (sequelize, DataTypes) {
  var Teachers = sequelize.define("Teachers", {
    TeachersName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    classRoom: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 100
    }
  });


  Teachers.associate = function (models) {
    Teachers.hasMany(models.Students);
  };
  return Teachers;
};
