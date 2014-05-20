
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
		// sends the typed input to the server and than receives a response
		// back once the server finishes its functions
		$.post('/search',searchForm, function(responseData){
			$('.search-term').text('');
		
			// var resultName = data.searchQuery;
			var results = {results : responseData }
			console.log(responseData)
			// Handlebars call
			$('.result-display').append(resultRender(results));
			// console.log(descriptionSearch)
		})


		
		return false;
	})
});