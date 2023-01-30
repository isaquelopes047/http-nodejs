const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'containers-us-west-111.railway.app',
    port: 7155,
    user: 'root',
    password: 'wuev7aKhqwRVcYnF0Dj0',
    database: 'railway'
});

module.exports = conexao;