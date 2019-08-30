const configDB = require('../Database/configDB');
const mysql = require('mysql');

const homeController = {};

homeController.login = (req, res) => {
	res.render('index',{
		login: false
	});
};

homeController.sign_in = (req, res) => {
	res.render('./Registro/registro', {
    	signUp: false
    });
};

homeController.sign_up = (req, res) => {
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
	        res.render('./Registro/registro', {
	        	signUp: true
	        });
	        connection.end();
		});
    });
};
homeController.login_post = (req, res) => {
	let connection = mysql.createConnection(configDB.config.DB);
	connection.query('SELECT id, email, password from tbl_users WHERE email = (?)', [req.body.email], (error, result) => {
		if(error){
        	console.log("Existe un error: "+error);
        	connection.end();
        }
        if(result.length == 0){
        	console.log("CORREO");
        	res.render('index',{
				login: true
			});
			connection.end();
        }
            
        if(req.body.password != JSON.parse(JSON.stringify(result))[0].password){
        	console.log("CONTRASEÑA");
        	res.render('index',{
				login: true
			});
			connection.end();
        }
        else{
            connection.query('SELECT role_id from tbl_user_role WHERE user_id = (?)', JSON.parse(JSON.stringify(result))[0].id, (error, result) => {
                if(error){
                    console.log("Existe un error: "+error);
                    connection.end();
                }

                if(configDB.config.users_role.USER == JSON.parse(JSON.stringify(result))[0].role_id){
                    console.log("Perfil de usuario");
                    res.redirect('/user');  
                    connection.end();
                }
                if(configDB.config.users_role.ADMIN == JSON.parse(JSON.stringify(result))[0].role_id){
                    console.log("Perfil de administrador");
                    res.redirect('/admin');
                    connection.end();
                }
            });
        }
	});
};

module.exports = homeController;
