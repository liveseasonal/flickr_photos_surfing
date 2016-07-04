// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function() {
  console.log('here');
  var photos = [];
  var api_key = "821d2023b9c486ee0421b9d3b56779ca";
  var flickrApiBaseUrl = "https://api.flickr.com/services/rest/?";
  
  var apiURL = flickrApiBaseUrl + "method=flickr.photos.search&api_key=" + api_key + "&tags=surf&format=json&jsoncallback=?";
 
    $.getJSON( apiURL, function( data ) {
      // console.log(data);
       $.each(data.photos.photo, function(index, photo) {
        photos[index] = photo;
        var imgLink = 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
        $('<img>').attr('id', photo.id).attr('src', imgLink).hide().appendTo('#image-container');
        // alt=""
       });
    console.log(photos) 
    $('#' + photos[0].id).show();

    var count = photos.length;
    var i = 0;

   setInterval(function() {
    if (i > count) { i = 0; }
      $('#' + photos[i].id).fadeOut(2000);
      $('#' + photos[i + 1].id).fadeIn(3000);
      i += 1;
    }, 5000);  

    });

}); 
    //build the url of the photo in order to link to it
//     var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg'
// }

// https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=#{flickr_api_key}&tags=#{city_name}&format=json&nojsoncallback=1"
      
