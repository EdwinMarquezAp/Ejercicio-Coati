const jwt = require('jsonwebtoken');

// Verify is exist token
module.exports.isAuthenticated = function (req, res, next){
	console.log(req.headers);
	console.log(req.header('Authorization'));
	next();
	/*
	if (typeof req.header('Authorization') !== "undefined" || req.header('authorization') !== "undefined"){
		console.log(req.header('Authorization'));
		console.log(req.header('authorization'));
		
		next();
	}else{
		console.log("Autenticate");
		res.redirect('/');
	}
	if(classToken.createToken() !== 'undefined'){
		next();
	}
	else{
		console.log("Autenticate");
		res.redirect('/');
	}
	*/
};
