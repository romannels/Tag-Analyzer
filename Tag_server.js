var helpscout = require('helpscout')('64784d971a4c96f24ba2e6ffefbec238a377a2ee', 16514); // yes I was stupid, yes this was revoked very close to the time this was commited
var fs = require('fs');
var http = require('http');
var qs = require('querystring');
var child = require('child_process');
var viewer = fs.readFileSync(__dirname + '/Tag_viewer.html');
var viewer_helper = fs.readFileSync(__dirname + '/Tag_viewer.js');


// NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

var getHelp = function() {
	var tagName = 'w10';
	var ob = { tag: tagName , page: 16}
	helpscout.conversations.list(ob, function(err, mailboxes){
		 for (var i = 0; i < mailboxes.items.length; i++){
			 for(var j = 0; j < mailboxes.items[i].tags.length; j++){
		 console.log(mailboxes.items[i].tags[j]);}}
		 //console.log(mailboxes.items.length);
		 //console.log(mailboxes.items[49].closedBy.firstName);
		 //console.log(mailboxes.items[49].closedBy.lastName);
		 console.log("pages: " + mailboxes.pages);
		 console.log("objects: " + mailboxes.count)
		 console.log("page" + mailboxes.page)
	});
}
getHelp();
// Server for client
http.createServer(function(err, res){
	var body = "";
	if (res.url == "/") {
		res.writeHead(200, {'Content-Type': 'text/html'});	
		return res.end(
		viewer
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
