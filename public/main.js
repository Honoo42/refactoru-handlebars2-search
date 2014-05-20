
$(document).on('ready',function(){
	var resultTemplate= $('#results-template');
	var resultListing = resultTemplate.html();
  // console.log(productListing);

	var resultRender = Handlebars.compile(resultListing);
	
	$('.container-form').on('click','.search-btn',function(){


		$('.result-display').empty();

		var searchForm = {
			searchQuery:$('.search-term').val(),
			results:"Hello"
		}
		console.log(searchForm);

		$.post('/search',searchForm, function(responseData){
			$('.search-term').text('');
		
			// var resultName = data.searchQuery;
			var results = {results : responseData? responseData :"Not Found, Please Search Again fool!" }
			console.log(responseData)
			$('.result-display').append(resultRender(results));
			// console.log(descriptionSearch)
		})


		
		return false;
	})
});