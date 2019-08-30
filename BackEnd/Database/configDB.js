module.exports.config = {
	users_role: {
		ADMIN: "1", 
		USER: "2"
	},
	DB: {
		host     : 'localhost',
		user     : 'root',
		password : '',
	  	database : 'coati_database',
		port     : 3306,
		acquireTimeout: 10000,
		connectTimeout: 10000,
		charset: 'utf8mb4',
		debug: false
	}
};
