'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Articles', [{
        name: 'Introduction to Ashtanga',
        slug: 'Introduction to Ashtanga',
        image: 'ashtanga.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel pretium ex...',
        published: '2020-01-08 15:02:30',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Articles', [{
        name: 'Morning vinyasa flow routine',
        slug: 'Morning vinyasa flow routine',
        image: 'morning.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel pretium ex...',
        published: '2020-04-14 15:02:12',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Articles', [{
        name: 'Secrets of a yoga teacher',
        slug: 'Secrets of a yoga teacher',
        image: 'yoga-teacher.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel pretium ex...',
        published: '2020-01-24 15:02:02',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
    ])
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
