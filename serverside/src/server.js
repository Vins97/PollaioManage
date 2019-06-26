
var five = require("johnny-five")
const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)

var Users = require('./routes/users')


const port = 8080;
var led = require('./ControllerArduino/controllerDoor')

//test for socket io stream
setInterval(() =>{
     io.emit('image','Usa il server ogni secondo')
 },1000)



app.use(cors())
app.options('*', cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}));
server.listen(port, () => console.log(`Listening on port ${port}`));

app.use('/users',Users)



app.get('/prova', (req, res) => {
    res.send({ express: 'Login' });
  });

// app.get('/led/:mode', function (req, res){
//          switch(req.params.mode){
//              case "open":
//                  led.led.on()
//                  console.log("arriva")
//                  break
//              case "off":
//                  led.led.off()
//                  res.send({
//                     status: "off"
//                 })
//                  break
//          }



// })
app.get('/led/1', function (req, res){
    led.on()
    res.send("on")
 })
 app.get('/led/0', function (req, res){
    led.off()
    res.send("off")
 })
