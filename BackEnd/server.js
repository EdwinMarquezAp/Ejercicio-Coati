/*    DEPENDENCIES    */
// Body parser
const bodyParser = require('body-parser');
// Server 
const express = require('express');
// Cors
const cors = require('cors');
// Path files
const path = require('path');
// Server express in a variable
const app = express();
// Configuration of the port
const PORT_CONFIG = 3000;
// Path router
const customerRouter = require('./Routes/router');


/*    MIDDLEWARE DB     */
app.use(cors({
	origin: true,
	methods: 'GET, POST, PUT, PATCH, DELETE',
	allowedHeaders: 'Authorization, x-xsrf-token, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
	exposedHeaders: 'Content-Range, X-Content-Range',
	credentials: true,
	maxAge: 86400,
	preflightContinue: true,
	optionsSuccessStatus: 204  
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

/*    SERVER SETTINGS    */
app.set('port', PORT_CONFIG);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../FrontEnd/Views'));


/* 	  PATH PUBLIC     */
app.use(express.static(path.join(__dirname, '../FrontEnd/Public')));


/*    PATH ROUTES WITH ROUTER    */
app.use('/', customerRouter);


/*    SETTINGS PORT     */
app.listen(app.get('port'), () => {
	console.log("SERVIDOR EN EL PUERTO "+PORT_CONFIG);
});