const express = require('express');
const app = express();
const cors = require('cors');

const colors = {
  red: "\x1b[91m",
  green: "\x1b[92m",
  yellow: "\x1b[93m",
  blue: "\x1b[94m",
  magenta: "\x1b[95m",
  cyan: "\x1b[96m",
  _red: "\x1b[41m",
  _green: "\x1b[42m",
  _yellow: "\x1b[43m",
  _blue: "\x1b[44m",
  _magenta: "\x1b[45m",
  _cyan: "\x1b[46m",
  reset: "\x1b[0m"
}

const dbConnection = require('./dbConnection');
const connection = dbConnection();

//Settings - Configuraciones
app.set('port', process.env.PORT || 3000);

//Middlewares - Intermediarios
app.use(express.json()) // para que el servidor entienda el formato JSON

//Setting up the cors config
//app.use(cors({origin: 'http://localhost:4200'}));
// Configurar cabeceras y cors
/*app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  console.log('across-origin')
  next()
});

app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'PUT', 'DELETE', 'POST', 'PATCH']
}));
*/
//app.use(cors({origin: 'http://192.168.1.66:4200'}));
app.use(cors());

//Routes - Rutas
app.use('/api/sales/banner', require('./routes/ventas_banner_routes'))
app.use('/api/sales/categories', require('./routes/ventas_category_routes'))
app.use('/api/sales/labels', require('./routes/ventas_label_routes'))
app.use('/api/products/brands', require('./routes/product_brand_routes'))
app.use('/api/products/favs', require('./routes/product_favs_routes'))
app.use('/api/products/cart', require('./routes/product_cart_routes'))
app.use('/api/products', require('./routes/product_routes'))
app.use('/api/features/types', require('./routes/product_features-type_routes'))
app.use('/api/features/values', require('./routes/product_features-value_routes'))
app.use('/api/user', require('./routes/user_routes'))

//Starting the server - Iniciando el servidor
app.listen(app.get('port'), () => {
  console.log(`${colors.green}%s${colors.reset}${colors._blue} %s${colors.reset}`, '⚫ Server on port ', `${app.get('port')} `);
  console.log(process.env + ' MODE')
  connection.connect((err) => {
    if (err) {
      console.error(`${colors.red}%s${colors.reset}%s`, '⚫ Error connecting: ', err.stack);
      return;
    }

    console.log(`${colors.green}%s${colors.reset}${colors._blue} %s${colors.reset}`, '⚫ Database connected as id ', `${connection.threadId} `);
  });
});