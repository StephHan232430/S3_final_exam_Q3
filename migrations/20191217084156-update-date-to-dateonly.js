'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Records', 'date', {
      allowNull: false,
      type: Sequelize.DATEONLY
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Records', 'date', {
      allowNull: false,
      type: Sequelize.DATE
    })
  }
};
