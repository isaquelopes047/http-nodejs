const customExpress = require('../config/customExpress');
const http = require('http')

var server = http.createServer((req, res) => {
    console.log(server)
    res.end();
})

const app = customExpress();
app.listen(process.env.PORT);
