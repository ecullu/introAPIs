

// var searchNode = document.querySelector('#searchBox')

// var filterbyZip = function(zipcode){
// 	if(zipcode.keyCode === 13){
// 		var zipBox = zipcode.target
// 		var zipCode = zipBox.value
// 		console.log(zipCode)
// 		var data = $.getJSON('https://congress.api.sunlightfoundation.com//legislators/locate?apikey=a9648334a77f4a0e88bed1815fb9e028&zip=' + zipCode)
// 	}
// 	else{
// 		var data = $.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=a9648334a77f4a0e88bed1815fb9e028')
// 	}
// }
// setInterval(filterbyZip,20)
// searchNode.addEventListener('keydown', filterbyZip)



// var legLocation = $.getJSON('https://congress.api.sunlightfoundation.com//legislators/locate?apikey=a9648334a77f4a0e88bed1815fb9e028&zip=000')

var data = $.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=a9648334a77f4a0e88bed1815fb9e028')

var mainDiv = document.querySelector("#legList")
var legislators = function(apiResponse){
	console.log(apiResponse)
	legislatorsArr = apiResponse.results
	for(var i = 0; i < legislatorsArr.length; i++){
		var leg = legislatorsArr[i]
		var legDiv = document.createElement('div')
		legDiv.className = 'legBox'
		mainDiv.appendChild(legDiv)
		var legName = document.createElement('h2')
		legName.textContent = leg.first_name + ' ' + leg.last_name
		legDiv.appendChild(legName)

		legDiv.innerHTML += '<h4>' + leg.title + ' -- ' + leg.party + '-' + leg.state_name +'</h4>' + '<ul>' + '</ul>' 
		
		var legContactNode = legDiv.querySelector('ul')
		var legEmail = document.createElement('li')
		legEmail.textContent = 'Email: ' + leg.oc_email

		var legWebsite = document.createElement('li')
		legWebsite.textContent = 'Website: ' + leg.website

		var legFacebook = document.createElement('li')
		legFacebook.textContent = 'Facebook: ' + leg.facebook_id


		var legTwitter = document.createElement('li')
		legTwitter.textContent = 'Twitter: ' + leg.twitter_id
		

		legContactNode.appendChild(legEmail)
		legContactNode.appendChild(legWebsite)
		legContactNode.appendChild(legFacebook)
		legContactNode.appendChild(legTwitter)

		legDiv.innerHTML += '<h5>' + 'Term End: ' + leg.term_end + '</h5>'

	}
}
data.then(legislators)
searchNode.addEventListener('keydown', legislators)




