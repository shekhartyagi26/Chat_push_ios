var http = require('http');
var apn = require('apn');
var url = require('url');

var deviceToken = '5a41a9b0b5d2ce7833cf4957f26850cfaee4df7ff74ea4eae74339be2c095668';  // ** NEED TO SET TO YOURS
// var myDevice = new apn.Device(deviceToken);

var note = new apn.Notification();
note.badge = 1;
note.contentAvailable = 1;

note.alert = 'PushIt works:\n Congratulations! \u270C\u2764\u263A ';

note.payload = {'messageFrom': 'PushIt'};
note.topic = "com.excellence.chatt";

var callback = function(errorNum, notification){
    console.log('Error is: %s', errorNum);
    console.log('Note ' + JSON.stringify(notification));
}
var options = {

  //  gateway: 'gateway.sandbox.push.apple.com', // this URL is different for Apple's Production Servers and changes when you go to production
    //errorCallback: callback,
    production: false,
    cert: 'ChatAppcert.pem', // ** NEED TO SET TO YOURS
    key:  'ChatAppKey.pem',  // ** NEED TO SET TO YOURS
    passphrase: 'java@123', // ** NEED TO SET TO YOURS

    //port: 2195,


   // cacheLength: 100
}
// var apnsConnection = new apn.Connection(options);
//
// console.log('Note ' + JSON.stringify(note));
// apnsConnection.sendNotification(note);
var apnProvider = new apn.Provider(options);
apnProvider.send(note, deviceToken).then( (result) => {
  console.log(result);
    // see documentation for an explanation of result
});
