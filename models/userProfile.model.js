const db = require('./index');

module.exports = (sequelize, Sequelize) => {
  const UserProfile = sequelize.define("userProfile", {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    brief: {
      type: Sequelize.STRING,
    },
    experience: {
        type: Sequelize.INTEGER
    },
    education: {
      type: Sequelize.STRING,
    },
    videos: {
        type: Sequelize.STRING
    },
    profilePic: {
        type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.UUID,
      references: {
        model: 'users',
        key: 'id'
    }
  }
  });
  
  return UserProfile;
};