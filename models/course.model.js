module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("course", {
        dept: {
            type: Sequelize.STRING(4),
            allowNull: false
        },
        courseNum: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        level: {
            type: Sequelize.STRING(1)
        },
        hours: {
            type: Sequelize.STRING(1)
        },
        name: {
            type: Sequelize.STRING(100)
        },
        desc: {
            type: Sequelize.STRING(1500)
        }

    });

    return Course;
};