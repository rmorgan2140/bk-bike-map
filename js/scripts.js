mapboxgl.accessToken = 'pk.eyJ1Ijoicm01MDI2IiwiYSI6ImNramJxOGd6NTFiZjYycHFzanY0eTUwZ2sifQ.T4sUXGotNvdmqtESra1iwA';

var map = new mapboxgl.Map({
  container: 'map-container',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-73.95, 40.70],
  zoom: 10.0
});

map.scrollZoom.disable();

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

map.on('load', function() {

  map.addSource('bike-grades', {
    type: 'geojson',
    data: '/bk-bike-map/bike-grades.geojson'
  });

  map.addLayer({
  'id': 'Bike Grades',
  'type': 'fill',
  'source': 'bike-grades',
  'layout': {},
  'paint': {
    'fill-color': [
      'interpolate',
      ['linear'],
      ['get', 'index'],
      5,
      '#CCE6FF',
      10,
      '#8FAECC',
      15,
      '#6289B3',
      20,
      '#3C5D80',
      25,
      '#24374D'
    ]
  },
  'fill-opacity': 0.85
});

map.addLayer({
  'id': 'dist-outlines',
  'type': 'line',
  'source': 'bike-grades',
  'layout': {},
  'paint': {
    'line-color': 'rgba(235, 235, 235, 0.5)',
    'line-width': 0.2
  }
});

});


$.getJSON('./data/penncities.json', function(cityRows) {
  console.log(cityRows)

  cityRows.forEach(function(cityRow) {
    console.log(cityRow.name, cityRow.population, cityRow.skyline, cityRow.funfact, cityRow.bonus)

    var html = `
      <div class="popup">
        <a>
        <img class="flag" src=${cityRow.flagImage}>
        </a>
        <div class="cityname">${cityRow.name}</div>
        <div class="citypop"> Population ${cityRow.population}</div>
        <div><i>${cityRow.funfact}</i></div>
        <a>
        <img class="skyline" src=${cityRow.skyline}>
        </a>
        <a>
        <img class="bonus" src=${cityRow.bonus}>
        </a>
      </div>
    `

  var el =
    document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = 'url("img/keystone.png")';
      el.style.width = '40px';
      el.style.height = '40px';

    new mapboxgl.Marker(el)
      .setLngLat([cityRow.longitude, cityRow.latitude])
      .setPopup(new mapboxgl.Popup().setHTML(html))
      .addTo(map);

  })
})
