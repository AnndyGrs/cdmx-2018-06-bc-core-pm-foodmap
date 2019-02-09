document.getElementById('searchButton').addEventListener('click', () => {
  alert('Hola Mundo!');        
});
(function () {
  var content = document.getElementById("geolocation-test");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (objPosition) {
      let lng = objPosition.coords.longitude;
      let lat = objPosition.coords.latitude;
      let mainUrl = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll=';
      let queryS = 'sushi';

      let url = mainUrl + lat + '%2C%20' + lng + '&query=' + queryS +
        '&intent=browse&radius=2000&limit=15&client_id=IXDFMKCHXF2XOTGBHAF4F2SEQKVIFPK5W0TFQKJPGQ0I4DYW&client_secret=SBBKRTJS044DFMSOVP1ZUZXRXJSFZZM3H434OZTMAM5EPVEJ';


      const getData = () => {
        fetch(url)
          .then(restaurant => restaurant.json())
          .then(restaurant => {
            resultPlaces(restaurant);
          });
      };

      getData();

      const resultPlaces = (restaurant) => {
        let firstArray = restaurant.response.venues;
        let i = 0;
        for (i; i < firstArray.length; i++) {
          let name = firstArray[i].name;
          let location = firstArray[i].location.formattedAddress;
          // console.log(location);
          document.getElementById('messageSearch').innerHTML = `Buscaste: ${queryS}`;
          document.getElementById('results').innerHTML += `<section class="row">
    <section class="col-sm-12 col-md-6 col-lg-4">
      <div class="card mt-2">
        <div class="card-body">
          <a href="#" data-toggle="modal" data-target="#exampleModal">${name}</a>
        </div>
      </div>
    </section>
  </section>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Informacion</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <p> Nombre: ${name} </p>
      <p> Ubicacion: ${location}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>`;
        }
      };

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