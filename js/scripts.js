mapboxgl.accessToken = 'pk.eyJ1Ijoicm01MDI2IiwiYSI6ImNramJxOGd6NTFiZjYycHFzanY0eTUwZ2sifQ.T4sUXGotNvdmqtESra1iwA';


//function numberToString(x) {
//  return x.toString();
//}
//Add council member and neighborhood information - via https://council.nyc.gov/districts/

var bounds = [
[-74.5, 40.3], // Southwest coordinates
[-73.5, 40.95] // Northeast coordinates
];

//Setting up our map via mapboxgl

var map = new mapboxgl.Map({
  container: 'map-container',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-73.95, 40.70],
  zoom: 10.0,
  maxBounds: bounds
});

//Kill scroll zoom

map.scrollZoom.disable();

//Add navigation control

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');


map.on('load', function() {

//Adding our bike grades file (created via qgis)

map.addSource('crashes', {
    type: 'geojson',
    data: 'data/crashes.geojson'
  });

  map.addLayer({
    'id': 'crashes',
    'type': 'fill',
    'source': 'crashes',
    'layout': {},
    'paint': {
      'fill-color':{
      property: 'index',
      stops: [
        [0, '#517CAD'],
        [1.99, '#517CAD'],
        [2, '#85CC8D'],
        [3.99, '#85CC8D'],
        [4,'#D6C815'],
        [5.99,'#D6C815'],
        [6,'#DB842C'],
        [7.99,'#DB842C'],
        [8,'#B32911'],
        [12,'#B32911']]},
      'fill-opacity': 0.3
    }
  })

  // Add outlines

  map.addLayer({
    'id': 'dist-outlines',
    'type': 'line',
    'source': 'crashes',
    'layout': {},
    'paint': {
      'line-color': '#ffffff',
      'line-width': 0.4
    }
  });


  map.addSource('spending', {
    type: 'geojson',
    data: 'data/dot_cap.geojson'
  });

//Add bike index layer and set colors based on index


map.addLayer({
    'id': 'capital',
    type: 'circle',
        source: 'spending',
        paint: {
          'circle-radius': [
            'interpolate',
            ['linear'],
            ['number', ['get', 'cumm_tot']],
            0,8,
            4,12,
            20,16,
            50,20,
            100,22,
            200,26],
            'circle-color': [
              'interpolate',
              ['linear'],
              ['number', ['get', 'cumm_tot']],
              0,
              '#8fe3bd',
              100,
              '#039252'],
              'circle-opacity': 0.8
            }
      })


      map.addLayer({
          'id': 'ped-bike',
          type: 'circle',
              source: 'spending',
              paint: {
                'circle-radius': [
                  'interpolate',
                  ['linear'],
                  ['number', ['get', 'cumm_bp']],
                  0,8,
                  4,12,
                  20,16,
                  50,20,
                  100,22,
                  200,26],
                  'circle-color': [
                    'interpolate',
                    ['linear'],
                    ['number', ['get', 'cumm_bp']],
                    0,
                    '#8fe3bd',
                    100,
                    '#039252'],
                    'circle-opacity': 0.8
                  }
            })


            map.addLayer({
                'id': 'bus',
                type: 'circle',
                    source: 'spending',
                    paint: {
                      'circle-radius': [
                        'interpolate',
                        ['linear'],
                        ['number', ['get', 'cumm_bus']],
                        0,8,
                        4,12,
                        20,16,
                        50,20,
                        100,22,
                        200,26],
                        'circle-color': [
                          'interpolate',
                          ['linear'],
                          ['number', ['get', 'cumm_bus']],
                          0,
                          '#8fe3bd',
                          100,
                          '#039252'],
                          'circle-opacity': 0.8
                        }
                  })


                  map.addLayer({
                      'id': 'general',
                      type: 'circle',
                          source: 'spending',
                          paint: {
                            'circle-radius': [
                              'interpolate',
                              ['linear'],
                              ['number', ['get', 'cumm_gen']],
                              0,8,
                              4,12,
                              20,16,
                              50,20,
                              100,22,
                              200,26],
                              'circle-color': [
                                'interpolate',
                                ['linear'],
                                ['number', ['get', 'cumm_gen']],
                                0,
                                '#8fe3bd',
                                100,
                                '#039252'],
                                'circle-opacity': 0.8
                              }
                        })

map.addLayer({
      'id': 'label-style',
      'type': 'symbol',
      'source': 'spending',
      'layout': {
      'text-field': ['concat','$',['get','cumm_tot'],'M'],
           'text-size': ['interpolate',['linear'],['number', ['get', 'cumm_tot']],
           0,6,
           4,7,
           20,8,
           50,9,
           100,10,
           200,12]
          },
      'paint': {
      'text-color': '#069'}
      });

      map.addLayer({
            'id': 'label-style-bp',
            'type': 'symbol',
            'source': 'spending',
            'layout': {
            'text-field': ['concat','$',['get','cumm_bp'],'M'],
                 'text-size': ['interpolate',['linear'],['number', ['get', 'cumm_bp']],
                 0,6,
                 4,7,
                 20,8,
                 50,9,
                 100,10,
                 200,12]
                },
            'paint': {
            'text-color': '#069'}
            });

            map.addLayer({
                  'id': 'label-style-bus',
                  'type': 'symbol',
                  'source': 'spending',
                  'layout': {
                  'text-field': ['concat','$',['get','cumm_bus'],'M'],
                       'text-size': ['interpolate',['linear'],['number', ['get', 'cumm_bus']],
                       0,6,
                       4,7,
                       20,8,
                       50,9,
                       100,10,
                       200,12]
                      },
                  'paint': {
                  'text-color': '#069'}
                  });

                  map.addLayer({
                        'id': 'label-style-gen',
                        'type': 'symbol',
                        'source': 'spending',
                        'layout': {
                        'text-field': ['concat','$',['get','cumm_gen'],'M'],
                             'text-size': ['interpolate',['linear'],['number', ['get', 'cumm_gen']],
                             0,6,
                             4,7,
                             20,8,
                             50,9,
                             100,10,
                             200,12]
                            },
                        'paint': {
                        'text-color': '#069'}
                        });



      map.setFilter(['capital'], ['==', 'fy_num', 2021]);

      map.setFilter(['label-style'], ['==', 'fy_num', 2021]);

      map.setFilter(['ped-bike'], ['==', 'fy_num', 2021]);

      map.setFilter(['label-style-bp'], ['==', 'fy_num', 2021]);

      map.setFilter(['bus'], ['==', 'fy_num', 2021]);

      map.setFilter(['label-style-bus'], ['==', 'fy_num', 2021]);

      map.setFilter(['general'], ['==', 'fy_num', 2021]);

      map.setFilter(['label-style-gen'], ['==', 'fy_num', 2021]);

      document.getElementById('slider').addEventListener('input', function(e) {
        var fy = parseInt(e.target.value);


        map.setFilter('capital', ['==', ['get', 'fy_num'], fy]);

        map.setFilter('label-style', ['==', ['get', 'fy_num'], fy]);

        map.setFilter('ped-bike', ['==', ['get', 'fy_num'], fy]);

        map.setFilter('label-style-bp', ['==', ['get', 'fy_num'], fy]);

        map.setFilter('bus', ['==', ['get', 'fy_num'], fy]);

        map.setFilter('label-style-bus', ['==', ['get', 'fy_num'], fy]);

        map.setFilter('general', ['==', ['get', 'fy_num'], fy]);

        map.setFilter('label-style-gen', ['==', ['get', 'fy_num'], fy]);

        document.getElementById('fiscal-year').innerText = fy;
      })


      map.setLayoutProperty('capital', 'visibility', 'visible');
      map.setLayoutProperty('label-style', 'visibility', 'visible');
      map.setLayoutProperty('ped-bike', 'visibility', 'none');
      map.setLayoutProperty('label-style-bp', 'visibility', 'none');
      map.setLayoutProperty('bus', 'visibility', 'none');
      map.setLayoutProperty('label-style-bus', 'visibility', 'none');
      map.setLayoutProperty('general', 'visibility', 'none');
      map.setLayoutProperty('label-style-gen', 'visibility', 'none');

      $('#all').on('click', function() {

        map.setLayoutProperty('capital', 'visibility', 'visible');
        map.setLayoutProperty('label-style', 'visibility', 'visible');
        map.setLayoutProperty('ped-bike', 'visibility', 'none');
        map.setLayoutProperty('label-style-bp', 'visibility', 'none');
        map.setLayoutProperty('bus', 'visibility', 'none');
        map.setLayoutProperty('label-style-bus', 'visibility', 'none');
        map.setLayoutProperty('general', 'visibility', 'none');
        map.setLayoutProperty('label-style-gen', 'visibility', 'none');
})

$('#bp').on('click', function() {

  map.setLayoutProperty('capital', 'visibility', 'none');
  map.setLayoutProperty('label-style', 'visibility', 'none');
  map.setLayoutProperty('ped-bike', 'visibility', 'visible');
  map.setLayoutProperty('label-style-bp', 'visibility', 'visible');
  map.setLayoutProperty('bus', 'visibility', 'none');
  map.setLayoutProperty('label-style-bus', 'visibility', 'none');
  map.setLayoutProperty('general', 'visibility', 'none');
  map.setLayoutProperty('label-style-gen', 'visibility', 'none');
})

$('#bus').on('click', function() {

  map.setLayoutProperty('capital', 'visibility', 'none');
  map.setLayoutProperty('label-style', 'visibility', 'none');
  map.setLayoutProperty('ped-bike', 'visibility', 'none');
  map.setLayoutProperty('label-style-bp', 'visibility', 'none');
  map.setLayoutProperty('bus', 'visibility', 'visible');
  map.setLayoutProperty('label-style-bus', 'visibility', 'visible');
  map.setLayoutProperty('general', 'visibility', 'none');
  map.setLayoutProperty('label-style-gen', 'visibility', 'none');
})

$('#gen').on('click', function() {

  map.setLayoutProperty('capital', 'visibility', 'none');
  map.setLayoutProperty('label-style', 'visibility', 'none');
  map.setLayoutProperty('ped-bike', 'visibility', 'none');
  map.setLayoutProperty('label-style-bp', 'visibility', 'none');
  map.setLayoutProperty('bus', 'visibility', 'none');
  map.setLayoutProperty('label-style-bus', 'visibility', 'none');
  map.setLayoutProperty('general', 'visibility', 'visible');
  map.setLayoutProperty('label-style-gen', 'visibility', 'visible');
})

//Blank highlight feature
map.addSource('highlight-feature', {
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features: []
  }
})

//Layer to complete the highlight

map.addLayer({
  id: 'highlight-line',
  type: 'line',
  source: 'highlight-feature',
  paint: {
    'line-width': 2,
    'line-color': 'white',
  }
});

})
// Create the popups

var popup = new mapboxgl.Popup({
  closeButton: true,
  closeOnClick: true
});

//Set popups to appear when hovered

map.on('click', function (e) {
  var features = map.queryRenderedFeatures(e.point, {
      layers: ['capital','crashes'],
  });

if (features.length > 0) {
  var clickedFeature = features[0]
  if (clickedFeature.layer.id === 'capital') {
  var dist = clickedFeature.properties.c_dist
  var index = numberToString(clickedFeature.properties.cumm_tot)

  var popupContent = `
    <div class="popup">
      <b>Council District ${dist}</b><br/>
      Spending: ${index}
    </div>`

    popup.setLngLat(e.lngLat).setHTML(popupContent).addTo(map);}

    else {
    var index = numberToString(clickededFeature.properties.index)


    var popupContent = `
      <div class="popup">
        <b> Street Name: ${index} </b><br/>
      </div>`

      popup.setLngLat(e.lngLat).setHTML(popupContent).addTo(map);
  }

    map.getSource('highlight-feature').setData(clickedFeature.geometry);

}

else {
// Remove the Popup when nothing is hovered
popup.remove();
map.getCanvas().style.cursor = '';
map.getSource('highlight-feature').setData({
      "type": "FeatureCollection",
      "features": []
  });
}
});

map.on('mouseenter', 'crashes', function () {
map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'crashes', function () {
map.getCanvas().style.cursor = '';
});




map.on('mouseenter', 'capital', function () {
map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'capital', function () {
map.getCanvas().style.cursor = '';
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//Create rudimentary bike routes toggle

//var toggleableLayerIds = ['bike routes'];

//for (var i = 0; i < toggleableLayerIds.length; i++) {
//  var id = toggleableLayerIds[i];

//  var link = document.createElement('a');
//  link.href = '#';
//  link.className = 'active';
//  link.textContent = id;

//  link.onclick = function(e) {
//    var clickedLayer = this.textContent;
//    e.preventDefault();
//    e.stopPropagation();

//    var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

//    if (visibility === 'visible') {
//      map.setLayoutProperty(clickedLayer, 'visibility', 'none');
//      this.className = '';
//    } else {
//      this.className = 'active';
//      map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
//    }
//  };

//  var layers = document.getElementById('menu');
//  layers.appendChild(link);
//}
