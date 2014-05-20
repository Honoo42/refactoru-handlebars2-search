var searchData = require('../models/search-data.json');
var search = {
	searchData: function(req,res){
// 
		console.log("Outside the for loop: ",Object.keys(searchData.programming));
		var searchKey = req.body.searchQuery;
		console.log("Outside for loop and req.body info: ",req.body.searchQuery);
		console.log("Description: ",searchData.programming["JavaScript"].desc);
		for (key in searchData.programming){
			if (searchData.programming.hasOwnProperty(key)) {
				console.log(key + " -> "+ searchData.programming[key]);
			}
		console.log("What does this give me?",key)
			if(searchKey.toLowerCase() === key.toLowerCase()){
				var descriptionSearch = searchData.programming[key].desc;
				res.send(descriptionSearch)
				console.log(descriptionSearch)
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