var express=require("express");
var bodyParser=require('body-parser');
var app = express();
var fileUpload = require('express-fileupload');

var authenticateController=require('./controlers/authenticate-controller');
var registerController=require('./controlers/register-controller');
var product = require('./controlers/product')
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//app.use(express.static(path.join(__dirname, 'uploads')));
app.use(fileUpload());

/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
app.post('/api/productadd', product.add);


app.listen(8012);