const configDB = require('../Database/configDB');
const mysql = require('mysql');

const adminController = {};

adminController.home = (req, res) => {
	let connection = mysql.createConnection(configDB.config.DB);
	connection.query('SELECT * FROM tbl_users', (error, result) => {
        if(error){
        	console.log("Existe un error: "+error);
        	connection.end();
        }
        res.render('./Admin/admin',{
        	data: result
        });
        connection.end();
    });
};

adminController.crear = (req, res) => {
	let connection = mysql.createConnection(configDB.config.DB);
	connection.query('INSERT INTO tbl_users (name, last_name, email, password) VALUES (?,?,?,?)', [req.body.name, req.body.last_name, req.body.email, req.body.password], (error, result) => {
        if(error){
        	console.log("Existe un error: "+error);
        	connection.end();
        }
 		connection.query('INSERT INTO tbl_user_role (user_id, role_id) VALUES (?, ?)', [result.insertId, configDB.config.users_role.USER], (error, result) => {
			if(error){
	        	console.log("Existe un error: "+error);
	        	connection.end();
	        }
	        res.redirect('/admin');
	        connection.end();
		});
    });
};

adminController.modificar = (req, res) => {
	console.log(req.params.id);
	res.render('./Admin/edit', {
		id: req.params.id
	});
};

adminController.modificar_action = (req, res) => {
	console.log(req.params);
	res.send("LISTO POST");
};

adminController.eliminar = (req, res) => {
	let connection = mysql.createConnection(configDB.config.DB);
	connection.query('DELETE FROM tbl_users where id = (?)', req.params.id, (error, result) => {
        if(error){
        	console.log("Existe un error: "+error);
        	connection.end();
        }
        res.redirect('/admin');
    	connection.end();
    });
};

module.exports = adminController;