var bandsSelect = document.getElementById("bands");
var artistsSelect = document.getElementById("artists");
let loader = document.querySelector(".loader-container")


var xhr = new XMLHttpRequest ()
xhr.open('get' , "bands.json")
xhr.send()
xhr.addEventListener("readystatechange" , function () {
    if (xhr.readyState === 4) {
        if (xhr.status == 200) {
                var data = JSON.parse(xhr.response)
                if(data) {
                    loader.style.display = "none"
                    populateBands(data);
                    bandsSelect.addEventListener('change', function() {
                        var selectedBand = this.value;
                        populateArtists(selectedBand , data);
                    });
                    artistsSelect.addEventListener('change', function() {
                        var artistURL = this.value;
                        if (artistURL) {
                            window.location.href = artistURL;
                        }
                    });
                }
        } else {
            window.location.replace("error.html")
        }
    }
})




function populateBands(data) {
    var bandsData = data[0]; 
    console.log(bandsData);
    
    for (var band in bandsData) {

            var option = document.createElement("option");
            option.value = band;
            option.textContent = band;
            bandsSelect.appendChild(option);

    }
}


function populateArtists(bandName , data) {
    artistsSelect.innerHTML = '<option value="">--Select an artist--</option>';
    if (bandName) {
        console.log(bandName);
        var bandsData = data[0];
        var artists = bandsData[bandName];
        console.log(artists);
        artists.forEach(function(artist) {
            var option = document.createElement("option");
            option.value = artist.value;
            option.textContent = artist.name;
            artistsSelect.appendChild(option);
        });

        artistsSelect.disabled = false;
    } else {
        artistsSelect.disabled = true;
    }
}

