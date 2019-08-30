const jwt = require('jsonwebtoken');

// Verify is exist token
module.exports.verifyToken = function (req, res, next){
	console.log(req.header['token-header']);

	if(typeof req.header['authorization'] !== 'undefined'){
		const token = req.header['authorization'].split(" ");
		req.token = token[1];
		next();
	}
	else{
		console.log("Autenticate");
		res.redirect('/');
	}
	
};

// Verify if token is equal to the token 
module.exports.verifyTokenIsToken = function (req, res, next){
	jwt.verify(req.token, 'my_secret_key_cool', (err, data) => {
		if(err){
			console.log("ERROR TOKEN: "+err);
		}
		else{
			console.log("Logeado con token");
			next();
		}
	});
};