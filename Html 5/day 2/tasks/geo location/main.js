var countries = document.querySelector("select")
var getGeo = document.querySelector(".getGeo")
navigator.geolocation.getCurrentPosition(success);

function success(geoObj) {
    getGeo.addEventListener('click' , function () {
    test(geoObj.coords.latitude, geoObj.coords.longitude);
    })
    countries.addEventListener("change" , function () {
        switch (this.value) {
            case "Egypt" :  test(26.8206, 30.8025);
            break;
            case "France" :  test(46.6034, 1.8883);
            break;
            case "Germany" :  test(51.1657, 10.4515);
            break;
            case "Qatar" :  test(25.276987, 51.520008);
            break;
            default : test(geoObj.coords.latitude, geoObj.coords.longitude);
        }
    })
}

function test(lat, long) {
    const myLatLng = { lat: lat, lng: long };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: myLatLng,
    });

    new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Hello World!",
    });
}



