'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    courseId: DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};