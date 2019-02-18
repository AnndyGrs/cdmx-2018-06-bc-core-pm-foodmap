let food = document.getElementById('searchBar');

document.getElementById('searchButton').addEventListener('click', event => {
    document.getElementById('mapContainer').innerHTML = '';
    document.getElementById('places').innerHTML = '';
    window.map.initializeMap(food.value);
});