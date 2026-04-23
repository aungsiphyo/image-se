var searchForm = document.getElementById('searchForm');
var searchKey = document.getElementById('searchKey');
var searchResult = document.getElementById('searchResult');
var loadMore = document.getElementById('loadMore');

var client_id = 'z39cBZlFKY8-gZ85amaC0dVCMdBlEpoLgS8jrcsCzYY';

var page = 1;
var query = '';

async function getPhotos(){
	query = searchKey.value;
	url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${client_id}&per_page=12`;
	var result = await fetch(url);
	var data = await result.json();

	if(page === 1){
		searchResult.innerHTML = '';
	}

	data.results.map((image)=>{
		var img = document.createElement('img');
		img.src = image.urls.small;
		searchResult.appendChild(img);
	})

	loadMore.style.display = "block";
}


searchForm.addEventListener("submit",(e)=>{
	e.preventDefault();
	page = 1;
	getPhotos();
});

loadMore.addEventListener("click",()=>{
	page++;
	getPhotos();
})