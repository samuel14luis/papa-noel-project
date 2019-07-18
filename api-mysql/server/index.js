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
app.use(cors({origin: 'http://localhost:4200'}));

//Routes - Rutas
app.use('/api/sales/banner',require('./routes/ventas_banner_routes'))
app.use('/api/sales/categories',require('./routes/ventas_category_routes'))
app.use('/api/sales/labels',require('./routes/ventas_label_routes'))
app.use('/api/products/brands',require('./routes/product_brand_routes'))
app.use('/api/products',require('./routes/product_routes'))

//Starting the server - Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log(`${colors.green}%s${colors.reset}${colors._blue} %s${colors.reset}`,'⚫ Server on port ', `${app.get('port')} `); 
    connection.connect( (err) => {
        if (err) {
          console.error(`${colors.red}%s${colors.reset}%s`,'⚫ Error connecting: ', err.stack);
          return;
        }
       
        console.log(`${colors.green}%s${colors.reset}${colors._blue} %s${colors.reset}`, '⚫ Database connected as id ', `${connection.threadId} `);
      });
});