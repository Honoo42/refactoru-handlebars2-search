var searchData = require('../models/search-data.json');
var search = {
	searchRender: function(req,res){
	for (var i = 0; i < searchData.length; i++) {
		console.log(searchData.programming.desc)
		if(req.body === searchData.programming[i]){
			console.log(searchData.programming.desc)
		}
		console.log(searchData.programming[i])
		// res.send(searchData.programming)
	};
		res.send(searchData.programming)

	// res.send(searchData.programming.desc)
	}
};

module.exports= search;