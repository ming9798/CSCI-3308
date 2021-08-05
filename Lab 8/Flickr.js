function makeApiCall(){
    var num_pics = document.getElementById("num_pics");
    var search_term = document.getElementById("search_term");
}

$(document).ready(function() {
    var url =' https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=34012c47e8e4067dc61c4542ddcd4e47&format=json&nojsoncallback=1'; //Place your Flickr API Call Here
    $.ajax({url:url, dataType:"json"}).then(function(data) {
      console.log(data);//Review all of the data returned
      console.log("Image title: " + data.current.title);//View Image title
    })
  })

data.array.forEach(element => {
    '<h5>' + data.current.title + '<h5>';
});