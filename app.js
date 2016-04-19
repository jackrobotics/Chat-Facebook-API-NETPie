/*
	Requirement NODEJS
		- facebook-chat-api
		- microgear
*/

/* ### START CONFIG ### */
var facebookEmail = 'jackcom.fibo@gmail.com';
var facebookPassword = '096826862';
//NETPIe
const KEY    = "d0B0ucFcjERJ6ER";
const SECRET = "R3n0XQGPRxZt2gvxrPDusSRC2axjU7";
const APPID     = "ROOM170";
const NETPieSERAlias = "WEBROOM170"
/* ###  END CONFIG  ### */

var login = require("facebook-chat-api");

login({email: facebookEmail, password: facebookPassword}, function callback (err, api) {
    if(err) return console.error(err);
    api.listen(function callback(err, message) {
	 	if(message.body.match(/turn on/gi)){
	 		microgear.chat('ROOM170', 'B');
	 	}else if(message.body.match(/turn off/gi)){
			microgear.chat('ROOM170', 'b');
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
