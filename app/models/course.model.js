module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("course", {
        department: {
            type: Sequelize.STRING,
        },

        courseNum: {
            type: Sequelize.STRING,
        },

        level: {
            type: Sequelize.STRING,
        },

        hours: {
            type: Sequelize.STRING,
        },

        name: {
            type: Sequelize.STRING,
        },

        description: {
            type: Sequelize.STRING,
        },
    });
    return Course;
}