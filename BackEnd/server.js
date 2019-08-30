/*    DEPENDENCIES    */
// Body parser
const bodyParser = require('body-parser');
// Server 
const express = require('express');
// Path files
const path = require('path');

// Server express in a variable
const app = express();

/*    SERVER SETTINGS    */
app.set('port', process.env.PORT || 8080);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../FrontEnd/Views'));
app.disable('x-powered-by');

/* 	  PATH PUBLIC     */
app.use(express.static(path.join(__dirname, '../FrontEnd/Public')));

/*    MIDDLEWARE DB     */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// Path router
const customerRouter = require('./Routes/router');

/*    PATH ROUTES WITH ROUTER    */
app.use('/', customerRouter);

/*    SETTINGS PORT     */
app.listen(app.get('port'), () => {
	console.log("SERVIDOR PUERTO 8080");
});