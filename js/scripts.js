mapboxgl.accessToken = 'pk.eyJ1Ijoicm01MDI2IiwiYSI6ImNramJxOGd6NTFiZjYycHFzanY0eTUwZ2sifQ.T4sUXGotNvdmqtESra1iwA';


//Limit how far users can pan

var bounds = [
  [-74.5, 40.4], // Southwest coordinates
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

  //Add the data for crashes

  map.addSource('crashes', {
    type: 'geojson',
    data: 'data/crashes_cd.geojson'
  });


  //Create the crashes layer

  //This is a fill layer with stops based on our index - monthly avg crashes + annual Fatalities

  map.addLayer({
    'id': 'crashes',
    'type': 'fill',
    'source': 'crashes',
    'layout': {},
    'paint': {
      'fill-color': {
        property: 'index',
        stops: [
          [0, '#517CAD'],
          [11.99, '#517CAD'],
          [22, '#85CC8D'],
          [23.99, '#85CC8D'],
          [44, '#D6C815'],
          [64.99, '#D6C815'],
          [65, '#DB842C'],
          [94.99, '#DB842C'],
          [95, '#B32911'],
          [150, '#B32911']
        ]
      },
      'fill-opacity': ['interpolate', ['linear'],
        ['number', ['get', 'index']], 0, 0.3, 150, 0.7
      ],
    }
  })

  // Add outlines for the community districts

  map.addLayer({
    'id': 'dist-outlines',
    'type': 'line',
    'source': 'crashes',
    'layout': {},
    'paint': {
      'line-color': '#ffffff',
      'line-width': 0.6
    }
  });


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

  //Add our capital projects data

  map.addSource('spending', {
    type: 'geojson',
    data: 'data/dot_cap.geojson'
  });

  //Add all projects layer and set colors based spending by community district

  //Circle markers will grow as cummulative spending grows

  map.addLayer({
    'id': 'capital',
    type: 'circle',
    source: 'spending',
    paint: {
      'circle-radius': [
        'interpolate',
        ['linear'],
        ['number', ['get', 'cumm_tot']],
        0, 10,
        4, 14,
        20, 18,
        50, 22,
        100, 25,
        200, 30
      ],
      'circle-color': [
        'interpolate',
        ['linear'],
        ['number', ['get', 'cumm_tot']],
        0,
        '#8fe3bd',
        100,
        '#039252'
      ],
      'circle-opacity': 0.9
    },
  })

  //Add our pedestrian and bike project ONLY layer

  map.addLayer({
    'id': 'ped-bike',
    type: 'circle',
    source: 'spending',
    paint: {
      'circle-radius': [
        'interpolate',
        ['linear'],
        ['number', ['get', 'cumm_bp']],
        0, 10,
        4, 14,
        20, 18,
        50, 22,
        100, 25,
        200, 30
      ],
      'circle-color': [
        'interpolate',
        ['linear'],
        ['number', ['get', 'cumm_bp']],
        0,
        '#8fe3bd',
        100,
        '#039252'
      ],
      'circle-opacity': 0.9
    }
  })

  //Repeat for bus projects

  map.addLayer({
    'id': 'bus',
    type: 'circle',
    source: 'spending',
    paint: {
      'circle-radius': [
        'interpolate',
        ['linear'],
        ['number', ['get', 'cumm_bus']],
        0, 10,
        4, 14,
        20, 18,
        50, 22,
        100, 25,
        200, 30
      ],
      'circle-color': [
        'interpolate',
        ['linear'],
        ['number', ['get', 'cumm_bus']],
        0,
        '#8fe3bd',
        100,
        '#039252'
      ],
      'circle-opacity': 0.9
    }
  })

  // Repeat again for general street recon

  map.addLayer({
    'id': 'general',
    type: 'circle',
    source: 'spending',
    paint: {
      'circle-radius': [
        'interpolate',
        ['linear'],
        ['number', ['get', 'cumm_gen']],
        0, 10,
        4, 14,
        20, 18,
        50, 22,
        100, 25,
        200, 30
      ],
      'circle-color': [
        'interpolate',
        ['linear'],
        ['number', ['get', 'cumm_gen']],
        0,
        '#8fe3bd',
        100,
        '#039252'
      ],
      'circle-opacity': 0.9
    }
  })
  //Create a symbol layer with the spending amounts
  //Text will grow as spending grows
  //This layer is all projects

  map.addLayer({
    'id': 'label-style',
    'type': 'symbol',
    'source': 'spending',
    'layout': {
      'text-field': ['concat', '$', ['get', 'cumm_tot'], 'M'],
      'text-size': ['interpolate', ['linear'],
        ['number', ['get', 'cumm_tot']],
        0, 7,
        4, 8,
        20, 9,
        50, 10,
        100, 12,
        200, 14
      ],
      'text-allow-overlap': true
    },
    'paint': {
      'text-color': '#303030',
    }
  });

  //Repeat for bike projects

  map.addLayer({
    'id': 'label-style-bp',
    'type': 'symbol',
    'source': 'spending',
    'layout': {
      'text-field': ['concat', '$', ['get', 'cumm_bp'], 'M'],
      'text-size': ['interpolate', ['linear'],
        ['number', ['get', 'cumm_bp']],
        0, 7,
        4, 8,
        20, 9,
        50, 10,
        100, 12,
        200, 14
      ],
      'text-allow-overlap': true
    },
    'paint': {
      'text-color': '#303030'
    }
  });

  // Repeat again for bus

  map.addLayer({
    'id': 'label-style-bus',
    'type': 'symbol',
    'source': 'spending',
    'layout': {
      'text-field': ['concat', '$', ['get', 'cumm_bus'], 'M'],
      'text-size': ['interpolate', ['linear'],
        ['number', ['get', 'cumm_bus']],
        0, 7,
        4, 8,
        20, 9,
        50, 10,
        100, 12,
        200, 14
      ],
      'text-allow-overlap': true
    },
    'paint': {
      'text-color': '#303030'
    }
  });

  //Repeat again for street recon

  map.addLayer({
    'id': 'label-style-gen',
    'type': 'symbol',
    'source': 'spending',
    'layout': {
      'text-field': ['concat', '$', ['get', 'cumm_gen'], 'M'],
      'text-size': ['interpolate', ['linear'],
        ['number', ['get', 'cumm_gen']],
        0, 7,
        4, 8,
        20, 9,
        50, 10,
        100, 12,
        200, 14
      ],
      'text-allow-overlap': true
    },
    'paint': {
      'text-color': '#303030'
    }
  });

  //Set the initial filter positions to start at FY21

  map.setFilter(['capital'], ['==', 'fy_num', 2021]);

  map.setFilter(['label-style'], ['==', 'fy_num', 2021]);

  map.setFilter(['ped-bike'], ['==', 'fy_num', 2021]);

  map.setFilter(['label-style-bp'], ['==', 'fy_num', 2021]);

  map.setFilter(['bus'], ['==', 'fy_num', 2021]);

  map.setFilter(['label-style-bus'], ['==', 'fy_num', 2021]);

  map.setFilter(['general'], ['==', 'fy_num', 2021]);

  map.setFilter(['label-style-gen'], ['==', 'fy_num', 2021]);

  //Add a listener for the slider

  document.getElementById('slider').addEventListener('input', function(e) {
    var fy = parseInt(e.target.value);

    //Filter by fiscal year as users interact with the slider

    map.setFilter('capital', ['==', ['get', 'fy_num'], fy]);

    map.setFilter('label-style', ['==', ['get', 'fy_num'], fy]);

    map.setFilter('ped-bike', ['==', ['get', 'fy_num'], fy]);

    map.setFilter('label-style-bp', ['==', ['get', 'fy_num'], fy]);

    map.setFilter('bus', ['==', ['get', 'fy_num'], fy]);

    map.setFilter('label-style-bus', ['==', ['get', 'fy_num'], fy]);

    map.setFilter('general', ['==', ['get', 'fy_num'], fy]);

    map.setFilter('label-style-gen', ['==', ['get', 'fy_num'], fy]);

    //Adjust the year in the slider label

    document.getElementById('fiscal-year').innerText = fy;
  })

  //Set initial layer visibility to only show all projects

  map.setLayoutProperty('capital', 'visibility', 'visible');
  map.setLayoutProperty('label-style', 'visibility', 'visible');
  map.setLayoutProperty('ped-bike', 'visibility', 'none');
  map.setLayoutProperty('label-style-bp', 'visibility', 'none');
  map.setLayoutProperty('bus', 'visibility', 'none');
  map.setLayoutProperty('label-style-bus', 'visibility', 'none');
  map.setLayoutProperty('general', 'visibility', 'none');
  map.setLayoutProperty('label-style-gen', 'visibility', 'none');


  //Add event listeners for each radio button

  //First one is for all projects

  $('#all').on('click', function() {

    //Adjust visibility based on click
    map.setLayoutProperty('capital', 'visibility', 'visible');
    map.setLayoutProperty('label-style', 'visibility', 'visible');
    map.setLayoutProperty('ped-bike', 'visibility', 'none');
    map.setLayoutProperty('label-style-bp', 'visibility', 'none');
    map.setLayoutProperty('bus', 'visibility', 'none');
    map.setLayoutProperty('label-style-bus', 'visibility', 'none');
    map.setLayoutProperty('general', 'visibility', 'none');
    map.setLayoutProperty('label-style-gen', 'visibility', 'none');
  })

  //For bike & ped projects

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

  //For bus

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


  // For street recon

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


})


// Create mapbox popups to be used for the crashes layer

var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});



//Set popups to appear when hovered

map.on('mousemove', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['crashes'],
  });

  //Get data for the popups from our crashes layer

  if (features.length > 0) {
    var hoveredFeature = features[0]
    var boro = hoveredFeature.properties.borough
    var numb = hoveredFeature.properties.cd_number
    var nabe = hoveredFeature.properties.name
    var index = hoveredFeature.properties.index
    var inj = hoveredFeature.properties.number_of_persons_injured_sum
    var fat = hoveredFeature.properties.number_of_persons_killed_sum
    var popupContent = `
    <div class="popup">
      <b>${boro} CD ${numb}</b><br/>
      <a>${nabe}</a><br/>
      <a>Crash Index: ${index}</a><br/>
      <a>2020 Injuries: ${inj}</a><br/>
      <a>2020 Fatalities: ${fat}</a>
    </div>`

    //Set popup location based on feature geometry

    popup.setLngLat(e.lngLat).setHTML(popupContent).addTo(map);

    //Highlight feature setup

    map.getSource('highlight-feature').setData(hoveredFeature.geometry);

  } else {
    // Remove the Popup when nothing is hovered
    popup.remove();
    map.getCanvas().style.cursor = '';
    map.getSource('highlight-feature').setData({
      "type": "FeatureCollection",
      "features": []
    });
  }
});

//setup the modals

var modal = document.getElementsByClassName('modal');

// get the button that opens the modal
var btn = document.getElementsByClassName("btn-modal");


// get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the first modal
btn[0].onclick = function() {
  modal[0].style.display = "block";
}

// opening the second modal on click
btn[1].onclick = function() {
  modal[1].style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
  modal[0].style.display = "none";
}

span[1].onclick = function() {
  modal[1].style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
}

//note - for some reason this does not work for second modal... need to use close button

//set all projects radio to be clicked on document load

$(document).ready(function() {
  $('#all').trigger('click');
});

//set links to open in a new tab

$("a").attr("target", "_blank");
