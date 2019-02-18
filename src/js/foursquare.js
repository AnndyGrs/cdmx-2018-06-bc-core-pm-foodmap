(function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (objPosition) {
      let lng = objPosition.coords.longitude;
      let lat = objPosition.coords.latitude;
      let mainUrl = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll=';
      let queryS = 'pizza';
      let url = mainUrl + lat + '%2C%20' + lng + '&query=' + queryS +
        '&intent=browse&radius=2000&limit=15&client_id=IXDFMKCHXF2XOTGBHAF4F2SEQKVIFPK5W0TFQKJPGQ0I4DYW&client_secret=SBBKRTJS044DFMSOVP1ZUZXRXJSFZZM3H434OZTMAM5EPVEJ';
      let defaultLayers = platform.createDefaultLayers();
      let map = new H.Map(document.getElementById('mapContainer'),
        defaultLayers.normal.map,
        {
          zoom: 15,
          center: {
            lat: objPosition.coords.latitude,
            lng: objPosition.coords.longitude
          }
        });
      let icon = new H.map.Icon('../images/position.png');
      let marker = new H.map.Marker({
        lat: objPosition.coords.latitude,
        lng: objPosition.coords.longitude
      },
        { icon: icon });
      map.addObject(marker);

      // const getData = () => {
      //   fetch(url)
      //     .then(restaurant => restaurant.json())
      //     .then(restaurant => {
      //       resultPlaces(restaurant);
      //     });
      // };

      // getData();

      // const resultPlaces = (restaurant) => {
      //   let firstArray = restaurant.response.venues;
      //   console.log(firstArray);
      //   let i = 0;
      //   for (i; i < firstArray.length; i++) {
      //     document.getElementById('places').innerHTML += `
      //     <div class="card col-3 m-2">
      //       <div class="card-body text-left">
      //         <h5 class="card-title"> ${firstArray[i].name} </h5>
      //         <h6 class="card-subtitle mb-2 text-muted"> ${firstArray[i].location.formattedAddress} </h6>
      //       </div>
      //     </div>`;
      //     let icon = new H.map.Icon('../images/chicken.png');
      //     let marker = new H.map.Marker({
      //       lat: firstArray[i].location.lat,
      //       lng: firstArray[i].location.lng
      //     },
      //       { icon: icon });
      //     map.addObject(marker);
      //   }
      // };

    }, function (objPositionError) {
      switch (objPositionError.code) {
        case objPositionError.PERMISSION_DENIED:
          content.innerHTML = "No se ha permitido el acceso a la posición del usuario.";
          break;
        case objPositionError.POSITION_UNAVAILABLE:
          content.innerHTML = "No se ha podido acceder a la información de su posición.";
          break;
        case objPositionError.TIMEOUT:
          content.innerHTML = "El servicio ha tardado demasiado tiempo en responder.";
          break;
        default:
          content.innerHTML = "Error desconocido.";
      }
    }, {
        maximumAge: 75000,
        timeout: 15000
      });
  }
  else {
    content.innerHTML = "Su navegador no soporta la API de geolocalización.";
  }
})();