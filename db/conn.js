const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Conexão realizada com sucesso');
} catch (err) {
    console.log(`Não foi possível realizar conexão ${err}`);
}

module.exports = sequelize