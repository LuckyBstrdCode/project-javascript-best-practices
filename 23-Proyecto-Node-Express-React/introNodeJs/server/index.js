// importar express
const express = require('express');
const path = require('path');
const routes = require('./routes');
const configs = require('./config');

const db = require('./config/database');    
const bodyParser = require('body-parser');

db.authenticate();
//     .then(() => console.log('DB Conectada'))
//     .catch((error) => console.error(error));

// Configurar express
const app = express();

//  Habilitar pug - views template
app.set('view engine', 'pug');

// Añadir las vistas 
app.set('views', path.join(__dirname, './views'));


// Cargar una carpeta estatica llamada public
app.use(express.static('public'));

// Validar si estamos en desarrollo o prodccion
const config = configs[app.get('env')];

// Creamos las variables para el sitio Web
app.locals.titulo = config.nombresitio;

// Muestra el año actual
app.use((req, res, next)=> {
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    return next();
})

// Body Parser
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', routes());

app.listen(3000);