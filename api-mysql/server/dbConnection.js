const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'papanoel-store'
    });
}

/*
const mongoose = require('mongoose);
const URI = 'mongodb://localhost/mean-crud-db';
mongoose.connect(URI)
.then(db => console.log('DB connected'))
.catch(err => console.error(err));
module.exports = mongoose;
*/