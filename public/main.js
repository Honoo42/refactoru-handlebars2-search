
$(document).on('ready',function(){
	var resultTemplate= $('#results-template');
	var resultListing = resultTemplate.html();
  // console.log(productListing);

	var resultRender = Handlebars.compile(resultListing);
	
	$('.container-form').on('click','.search-btn',function(){
		// this.preventDefault();

		$('.result-display').empty();

		var searchForm = {
			searchQuery:$('.search-term').val()
		}
		console.log(searchForm);

		$.post('/search',searchForm, function(data){
			$('.search-term').text('');
			data = searchForm;
			var result = data.searchQuery;
			console.log(data.searchQuery)
			console.log('ajax is working!' + data);
			$('.result-display').append(result);
			return result;

		})
		
		return false;
	})
});