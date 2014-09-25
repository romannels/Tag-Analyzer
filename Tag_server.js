var helpscout = require('helpscout')('api-key', 16514);
var fs = require('fs');
var http = require('http');
var qs = require('querystring');

// NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
var getHelp = function() {
	var tagName = 'w10';
	helpscout.conversations.list({ tag: tagName }, function(err, mailboxes){
		 for (var i = 0; i < mailboxes.items.length; i++){
			 for(var j = 0; j < mailboxes.items[i].tags.length; j++){
		 console.log(mailboxes.items[i].tags[j]);}}
		 console.log(mailboxes.items.length);
		 console.log(mailboxes.items[49].closedBy.firstName);
		 console.log(mailboxes.items[49].closedBy.lastName);
	});
}

// Server for client
http.createServer(function(err, res){
	var body = "";
	if (res.url == "/") {
		res.writeHead(200, {'Content-Type': 'text/html'});	
		return response.end(
		//put form into this bad boy
		);
	}
	if (res.url == "/submit") {
		//alright time to do work
	}
});

// 
// var contents = fs.readFileSync("C:/Users/roman.nelson/helpscout_stats.json");
//console.log(contents);
// var config = JSON.parse(contents);
//console.log(config);
// console.log(config.overall.spoilsOfWar);
// config.overall.spoilsOfWar.aColdBalanceOfPower = "robobo";
// console.log(config.overall.spoilsOfWar.aColdBalanceOfPower);
// console.log(config.overall.spoilsOfWar);

// pseudo code
// one method to determine winners
// determine score of every person in every warehouse
// insert into json object
// find maximum value / winner
//

//THIS WILL PROBABLY BE STUPID SLOW MUST ITERATE OVER ENTIRE OBJECT FOR EVERY PERSON AND EVERY WAREHOUSE!!!! STUPID STUPID STUPID
// 1) retrieve all conversations between date range
// 2) select an employee (if employee == employee)
// 3) select a tag (if tag == tag)
// 4) implement loop and counter
// 5) repeat for every tag and employee
// 6) find maximum for every tag
// ONLY WAY TO SLIGHTLY IMPROVE WOULD BE TO DELETE AFTER READING, BUT THIS WILL STILL BE SLOW AND STUPID
// 
// SOMEWHAT BETTER METHOD
// 1) loop through received object only once using current name and warehouse tag 
// 2) instead of counter, update stats.json object (i.e. person.warehouseTotals.w10++)
// 3) find maximum for every tag (better way for this?)
//
// ANOTHER METHOD
// Find way to use helpscout API
// retrieve all records for single employee between given date
// update json object with values
// OR maybe retrieve all records for a single tag
