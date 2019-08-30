const configDB = require('../Database/configDB');
const mysql = require('mysql');

const userController = {};

userController.home = (req, res) => {
	let connection = mysql.createConnection(configDB.config.DB);
	connection.query('SELECT * FROM tbl_users', (error, result) => {
        if(error){
        	console.log("Existe un error: "+error);
        	connection.end();
        }
        res.render('./User/user',{
        	data: result
        });
        connection.end();
    });
};

module.exports = userController;