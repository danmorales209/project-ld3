module.exports = function (sequelize, DataTypes) {
    var Individual = sequelize.define("Individual", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        permissionLevel: {
            type: DataTypes.STRING,
            allowNull: false
        },
        roll: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    return Individual;
};
