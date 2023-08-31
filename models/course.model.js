module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("course", {
        courseNum: {
            type: Sequelize.STRING(10),
            allowNull: false,
            primaryKey: true
        },
        dept: {
            type: Sequelize.STRING(4),
            allowNull: false
        },
        level: {
            type: Sequelize.STRING(1),
            allowNull: false
        },
        hours: {
            type: Sequelize.STRING(1),
            allowNull: false
        },
        name: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        desc: {
            type: Sequelize.STRING(1500),
            allowNull: true
        },

    }, {
        timestamps: false
    });

    return Course;
};