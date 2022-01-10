var express = require('express');
var app = express();
var Db = require('./dboperations');
var bodyParser = require('body-parser');
var cors = require('cors');
const dboperations = require('./dboperations');
const { response } = require('express');
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
    console.log('middleware');
    next();
});


app.get('/tickets', (request, response) => {
    Db.getTickets().then((data) => {
        console.log(data);
        response.json(data[0]);
    })
})

app.post('/tickets', (request, response) => {

    let ticket = {...request.body}

    Db.addTickets(ticket).then((data) => {
        console.log(data);
        response.status(201).json(data);
    })
})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('MSA Ticket System API is runnning at ' + port);