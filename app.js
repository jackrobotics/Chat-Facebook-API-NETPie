/*
	Requirement NODEJS
		- facebook-chat-api
		- microgear
*/

/* ### START CONFIG ### */
var facebookEmail = 'email';
var facebookPassword = 'pass';
//NETPIe
const KEY    = "d0B0ucFscjERJ6ER";
const SECRET = "R3n0XQGPRxZt2gsvxrPDusSRC2axjU7";
const APPID     = "myROOM";
const NETPieSERAlias = "myROOM"
/* ###  END CONFIG  ### */

var login = require("facebook-chat-api");

login({email: facebookEmail, password: facebookPassword}, function callback (err, api) {
    if(err) return console.error(err);
    api.listen(function callback(err, message) {
	 	if(message.body.match(/turn on/gi)){
	 		microgear.chat('myRoom', 'ON');
	 	}else if(message.body.match(/turn off/gi)){
			microgear.chat('myRoom', 'OFF');
	 	}
    });
});


var MicroGear = require('microgear');

var microgear = MicroGear.create({
    key : KEY,
    secret : SECRET
});

microgear.on('connected', function() {
    console.log('NETPie Connected...');
    microgear.setalias(NETPieSERAlias);
    setInterval(function() {
        //microgear.chat('mygear', 'Hello world.');
    },1000);
});

microgear.on('message', function(topic,body) {
    console.log('incoming : '+topic+' : '+body);
});

microgear.on('closed', function() {
    console.log('Closed...');
});

microgear.connect(APPID);
