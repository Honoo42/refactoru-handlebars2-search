// Requires the json file to search through and pull out the needed values
var searchData = require('../models/search-data.json');
var search = {
	searchData: function(req,res){
// 
		console.log("Outside the for loop: ",Object.keys(searchData.searchEngines));
		// The typed in value that will be compared to our database, retrieved from main.js
		var searchKey = req.body.searchQuery;
		// console.log("Outside for loop and req.body info: ",req.body.searchQuery);
		// console.log("Description: ",searchData.programming["JavaScript"].desc);
		// Loops through the json object for each key
		for (key in searchData.programming ){
			// makes sure to only check the relevant keys
			if (searchData.programming.hasOwnProperty(key) ) {
				// console.log(key + " -> "+ searchData.programming[key]);
			}
		// console.log("What does this give me?",key)
			// If the searchKey and a key in the loop matches, it grabs the value
			// and sends it back to the client as data or responseData
			if(searchKey.toLowerCase() === key.toLowerCase()){
				var descriptionSearch = searchData.programming[key].desc;
				res.send(descriptionSearch)
				// console.log(descriptionSearch)
			}
			else{
				console.log("Please Search again")
			}
		};
		for (key in searchData.searchEngines ){
			if (searchData.searchEngines.hasOwnProperty(key) ) {
				// console.log(key + " -> "+ searchData.searchEngines[key]);
			}
		// console.log("What does this give me?",key)
			if(searchKey.toLowerCase() === key.toLowerCase()){
				var descriptionSearch = searchData.searchEngines[key].desc;
				res.send(descriptionSearch)
				// console.log(descriptionSearch)
			}
			else{
				console.log("Please Search again")
			}
		};
	},
	searchRender: function(req,res){
		console.log('Search Render');
	}
};

module.exports= search;