
// var five = require("johnny-five")
const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server, { origins: '*:*' })

<<<<<<< HEAD
=======
const streamffmpeg= require('rtsp-ffmpeg')

var fs = require('fs');
var path = require('path');
var spawn = require('child_process').spawn;

>>>>>>> 6fcf5c184d1be53a942ef2c723fc38bd9add9964


var weekMoovs = require('./routine/SunMoovementRequest')
var automatic = require('./routine/Automatization')
var jobManagement = require('./routine/JobSync')
//weekMoovs.APICallsWeekly()

automatic.startSyncTodayMoovs
automatic.startSyncEveryDayWeather
// automatic.overrideSyncTodayMoves()
jobManagement.syncAllJob()


// const SimpleNodeLogger = require('simple-node-logger'),
//    opts = {
//       logFilePath: 'logImgRaw.log',
//       timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS'
//    },
//    log = SimpleNodeLogger.createSimpleLogger(opts);



/* start deployment part*/
// const path = require('path');
// app.use(express.static(path.join(__dirname, '../../clientside/build')));

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '../../clientside/build', 'index.html'));
// });
//--------uncomment after npm run build in clientside-------
/*  end deployment part */

var Users = require('./routes/users')
var ChickenHouse = require('./routes/chickenhouse')
var Door = require('./routes/door')
var Jobs = require('./routes/jobs')
var Brightness = require('./routes/brightness')
var BatteryLevel = require('./routes/batteryLevel')


const port = 5000;
// var motor = require('./ControllerArduino/controllerDoor')


app.use(cors())
app.options('*', cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
server.listen(port, () => console.log(`Listening on port ${port}`));

app.use('/users', Users)
app.use('/ckHouse', ChickenHouse)
app.use('/door', Door)
app.use('/job', Jobs)
app.use('/bright', Brightness)
app.use('/battery', BatteryLevel)



//--------start---------------EXTERNAL Camera stream

<<<<<<< HEAD
const st = require('rtsp-ffmpeg')
var streamExternal = new st.FFMpeg({
=======

var stream = new streamffmpeg.FFMpeg({
>>>>>>> 6fcf5c184d1be53a942ef2c723fc38bd9add9964
    input: 'rtsp://192.168.2.1:554/11',
    rate: 10, // output framerate (optional)
    resolution: '1280x720', // output resolution in WxH format (optional)
    quality: 3 // JPEG compression quality level (optional)
<<<<<<< HEAD
});

//CORRETTO i dati vengono trasferiti alla socket ma la socket del client non li riceve
var external = io.of('/extcam')
external.on('connection', function (socket) {
    var int = 0
    console.log('Socket aperta')
    streamExternal.on('data', (data) => {
        socket.emit('data', data.toString('base64'))
    })
    streamExternal.on('disconnect', () => {
        console.log('Socket chiusa')
        stream.removeListener('data', () => {
            console.log('Connessione chiusa')
        });
=======
 });
const testSocket = io.of('/socketTest')
testSocket.on('connetion', (socket)=>{
    console.log('TestSocket ok')
    var count = 0
    setInterval(()=>{
        socket.emit('counter', (counter) =>{
            count = count + 1
        })
    },2000)
 
})
//CORRETTO i dati vengono trasferiti alla socket ma la socket del client non li riceve
const externalCamera = io.of('/externalCam') 
externalCamera.on('connection', function (socket) {

   console.log('Socket aperta')
   stream.on('data', (data) => {
      socket.emit('data', data.toString('base64'))
>>>>>>> 6fcf5c184d1be53a942ef2c723fc38bd9add9964
    })
})
// io.on('disconnect', function (socket) {

// })

//--------------end------------------------


//--------start---------------INTERNAL Camera stream


const intcam = require('./streaming/RaspPiCameraStream')

var streamInternal = new st.FFMpeg({
    input: 'rtsp://127.0.0.1:8554/',
    rate: 10, // output framerate (optional)
    resolution: '1280x720', // output resolution in WxH format (optional)
    quality: 3 // JPEG compression quality level (optional)
});

var external = io.of('/intcam')
external.on('connection', function (socket) {
    var int = 0
    console.log('Socket aperta')
    intcam.startVlcRSTP()
    streamInternal.on('data', (data) => {
        socket.emit('data', data.toString('base64'))
    })
    streamInternal.on('disconnect', () => {
        console.log('Socket chiusa')
        stream.removeListener('data', () => {
            console.log('Connessione chiusa')
        });
    })
})