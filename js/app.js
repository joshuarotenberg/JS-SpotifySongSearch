document.addEventListener("DOMContentLoaded", function() {

    console.log("dom loaded");

    var songTemplateHtml = document.getElementById("song-index-template").innerHTML;
    var songTemplateFunction = Handlebars.compile(songTemplateHtml);

    var songCard = document.getElementById("song-index");

    document
    .getElementById("find-song")
    .addEventListener("submit", function(e) {
        e.preventDefault();
        console.log("search song form submission");

        var songChoice = document.getElementById("song-query").value; 
        console.log(songChoice);

        axios
        .get(`https://api.spotify.com/v1/search?type=track&q=${songChoice}`, {
                    headers: {
                        'Authorization': 'Bearer BQA4GElMdhipJ29O-0IYGhVfk4MhB3j4_XRfo5OrUH-XNIl-4zesXMCDSZmswsMQ_h9Q9O24X9iwZA_1_hJOKopoH5BtfEhelHOnIq2-tccb2aCMX9cEM8HksQWdp089LZOjHiBt2bwcyvs6-rPht85xUYaG05ssIoM'
                    }
                })
                .then(function(response) {
                    
                    var songs = response.data.tracks.items;
                    console.log(songs);

                    for(song of songs) {
                        var songHtml = songTemplateFunction({
                            song_name: song.name,
                            artist: song.artists[0].name,
                            album: song.album.name,
                            preview_url: song.preview_url,
                            album_image: song.album.images[1].url,   
                            popularity: song.popularity  
                        });
            
                        songCard
                        .innerHTML += songHtml;  
        
                        
                    }
                  
                })
                .catch(function(err) {
                    console.log(err);
                })
        });    
  
  });
