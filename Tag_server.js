var helpscout = require('helpscout')('api-key', 16514);
var fs = require('fs');
var http = require('http');

//helpscout.conversations.list({ status: 'closed' }, function(err, mailboxes){
	// for (var i = 0; i < mailboxes.items.length; i++){
		// for(var j = 0; j < mailboxes.items[i].tags.length; j++){
	// console.log(mailboxes.items[i].tags[j]);}}
	// console.log(mailboxes.items.length);
	// console.log(mailboxes.items[49].closedBy.firstName);
	// console.log(mailboxes.items[49].closedBy.lastName);
//});

// http.createServer(function(err, res){
	// res.writeHead(200, {'Content-Type': 'text/plain'});	
// });

var contents = fs.readFileSync("C:/Users/roman.nelson/helpscout_stats.json");
//console.log(contents);
var config = JSON.parse(contents);
//console.log(config);
console.log(config.overall.spoilsOfWar);
config.overall.spoilsOfWar.aColdBalanceOfPower = "robobo";
console.log(config.overall.spoilsOfWar.aColdBalanceOfPower);
console.log(config.overall.spoilsOfWar);
