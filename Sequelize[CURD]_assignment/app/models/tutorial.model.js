module.exports = (sequelize,Sequelize) => {
    const Tutorial = sequelize.define('tutorial',{
        project: {
            type: Sequelize.STRING
          },
        manager: {
            type: Sequelize.STRING
          },
        engineer: {
            type: Sequelize.STRING
          }
    });

    return Tutorial;
};