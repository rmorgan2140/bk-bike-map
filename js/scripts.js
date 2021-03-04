mapboxgl.accessToken = 'pk.eyJ1Ijoicm01MDI2IiwiYSI6ImNramJxOGd6NTFiZjYycHFzanY0eTUwZ2sifQ.T4sUXGotNvdmqtESra1iwA';


function numberToString(x) {
  return x.toString();
}

var distMember = (code) => {
  switch (code) {
    case 1.0:
      return {member: 'Margaret S. Chin',
              neighborhood: 'Battery Park City, Civic Center, Chinatown, Financial District, Little Italy, the Lower East Side, NoHo, SoHo, South Street Seaport, South Village, TriBeCa & Washington Square'};
    case 2.0:
      return {member: 'Carlina Rivera',
              neighborhood: 'East Village, Gramercy, Midtown East'};
    case 3.0:
      return {member: 'Corey Johnson',
              neighborhood: 'West Village, Hells Kitchen, West Midtown'};
    case 4.0:
      return {member: 'Keith Powers',
              neighborhood: 'West Village, Hells Kitchen, West Midtown'};
    case 5.0:
      return {member: 'Ben Kallos',
              neighborhood:'Upper East Side, East Harlem, Roosevelt Island, Midtown East'};
    case 6.0:
      return {member: 'Helen Rosenthal',
    neighborhood:'Upper West Side'};
    case 7.0:
      return {member: 'Mark Levine',
    neighborhood:'Morningside Heights and West Harlem'};
    case 8.0:
      return {member: 'Diana Ayala',
    neighborhood:'East Harlem, Mott Haven, Highbridge, Concourse, Longwood, Port Morris'};
    case 9.0:
      return {member: 'Bill Perkins'
    ,neighborhood:'Central Harlem, Morningside Heights, Upper West Side, East Harlem'};
    case 10.0:
      return {member: 'Ydanis Rodriguez',
    neighborhood:'Washington Heights, Indwood, Marble Hill'};
    case 11.0:
      return {member: 'Vacant',
    neighborhood:'Bedford Park, Kingsbridge, Riverdale, Norwood, Van Cortlandt Village, Wakefield, Woodlawn'};
    case 12.0:
      return {member: 'Kevin Riley',
    neighborhood:'Wakefield, Olinville, Edenwald, Eastchester, Williamsbridge, Baychester, Co-op City'};
    case 13.0:
      return {member: 'Mark Gonaj',
    neighborhood:'Allerton, City Island, Country Club, Edgewater Park, Ferry Point, Locust Point, Morris Park, Pelham Bay, Pelham Gardens, Pelham Parkway, Schuylerville, Silver Beach, Spencer Estates, Throggs Neck, Van Nest, Waterbury LaSalle, Westchester Square, Zerega'};
    case 14.0:
      return {member: 'Fernando Cabrera',
    neighborhood:'Morris Heights, University Heights, Fordham, Kingsbridge'};
    case 15.0:
      return {member: 'Vacant',
    neighborhood:'Bedford Park, Fordham, Mount Hope, Bathgate, Belmont, East Tremont, West Farms, Van Nest, Allerton, Olinville'};
    case 16.0:
      return {member: 'Vennessa L. Gibson',
    neighborhood:'Claremont, Concourse, Concourse Village, Highbridge, Morris Heights, Mount Eden, Morrisania'};
    case 17.0:
      return {member: 'Rafael Salamanca Jr.',
    neighborhood:'Concourse Village, Crotona Park East, East Tremont, Hunts Point, Longwood, Melrose, Morrisania, Port Morris, West Farms'};
    case 18.0:
      return {member: 'Ruben Diaz Sr.',
    neighborhood:'Soundview, Castle Hill, Parkchester, Clason Point, Harding Park'};
    case 19.0:
      return {member: 'Paul Vallone'
    ,neighborhood:'Auburndale, Bay Terrace, Bayside, Beechhurst, College Point, Douglaston, Flushing, Little Neck, Malba, Whitestone'};
    case 20.0:
        return {member: 'Peter Koo',
      neighborhood:'Downtown Flushing, Murray Hill, Queensboro Hill'};
    case 21.0:
          return {member: 'Francisco Moya',
        neighborhood:'East Elmhurst, Elmhurst, Jackson Heights, and Corona in Queens, including Flushing Meadows Corona Park, Lefrak City and LaGuardia Airport'};
    case 22.0:
          return {member: 'Costa Constantinides',
        neighborhood:'Astoria, East Elmhurst, Jackson Heights, Woodside'};
    case 23.0:
          return {member: 'Barry Grodenchik',
        neighborhood:'Bayside Hills, Bellerose, Douglaston, Floral Park, Fresh Meadows, Glen Oaks, Hollis, Hollis Hills, Holliswood, Little Neck, New Hyde Park, Oakland Gardens, Queens Village'};
    case 24.0:
          return {member: 'James F. Gennaro',
        neighborhood:'Kew Gardens Hills, Pomonok, Electchester, Fresh Meadows, Hillcrest, Jamaica Estates, Briarwood, Parkway Village, Jamaica Hills, Jamaica'};
    case 25.0:
          return {member: 'Daniel Dromm',
        neighborhood:'Elmhurst, Jackson Heights'};
    case 26.0:
          return {member: 'Jimmy Van Bramer',
        neighborhood:'Sunnyside, Woodside, Long Island City, Astoria, Dutch Kills'};
    case 27.0:
          return {member: 'I. Daneek Miller',
        neighborhood:'Cambria Heights, Hollis, Jamaica, St. Albans, Queens Village, and Springfield Gardens	'};
    case 28.0:
          return {member: 'Adrienne E. Adams',
        neighborhood:'Jamaica, Richmond Hill, Rochdale Village, South Ozone Park	'};
    case 29.0:
          return {member: 'Karen Koslowitz',
        neighborhood:'Rego Park, Forest Hills, Kew Gardens, Richmond Hill	'};
    case 30.0:
          return {member: 'Robert F. Holden',
        neighborhood:'Glendale, Maspeth, Middle Village, Ridgewood, Woodhaven, Woodside'};
    case 31.0:
          return {member: 'Vacant',
        neighborhood:'Arverne, Brookville, Edgemere, Far Rockaway, Laurelton, Rosedale, Springfield Gardens	'};
    case 32.0:
          return {member: 'Eric A. Ulrich',
        neighborhood:'Belle Harbor, Breezy Point, Broad Channel, Howard Beach, Lindenwood, Neponsit, Ozone Park, Richmond Hill, Rockaway Park, Roxbury, South Ozone Park, West Hamilton Beach, Woodhaven'};
    case 33.0:
          return {member: 'Steven T. Levin',
        neighborhood:'Boerum Hill, Brooklyn Heights, Brooklyn Navy Yard, Downtown Brooklyn, Dumbo, Fulton Ferry, Greenpoint, Vinegar Hill, Williamsburg'};
    case 34.0:
          return {member: 'Antonio Reynoso',
        neighborhood:'Williamsburg, Bushwick, Ridgewood'};
    case 35.0:
          return {member: 'Laurie A. Cumbo',
        neighborhood:'Fort Greene, Clinton Hill, Crown Heights, Prospect Heights, Bedford Stuyvesant'};
    case 36.0:
          return {member: 'Robert E. Cornegy Jr.',
        neighborhood:'Bedford Stuyvesant, Northern Crown Heights'};
    case 37.0:
          return {member: 'Darma V. Diaz',
        neighborhood:'Cypress Hills, Bushwick, City Line, Ocean Hill, Brownsville, East New York'};
    case 38.0:
          return {member: 'Carlos Menchaca',
        neighborhood:'Red Hook, Sunset Park, Greenwood Heights and portions of Windsor Terrace, Dyker Heights, and Boro Park'};
    case 39.0:
          return {member: 'Brad Lander',
        neighborhood:'Cobble Hill, Carroll Gardens, Columbia Waterfront, Gowanus, Park Slope, Windsor Terrace, Borough Park, Kensington'};
    case 40.0:
            return {member: 'Mathieu Eugene',
          neighborhood:'Crown Heights, East Flatbush, Flatbush, Kensington, Midwood, Prospect Park, and Prospect Lefferts Gardens'};
    case 41.0:
            return {member: 'Alicka Ampry-Samuel',
          neighborhood:'Bedford-Stuyvesant, Ocean Hill-Brownsville, East Flatbush, Crown Heights'};
    case 42.0:
            return {member: 'Inez Barron',
          neighborhood:'East New York, New Lots, Remsen Village, Spring Creek, Starrett City'};
    case 43.0:
            return {member: 'Justin Brannan',
          neighborhood:'Bay Ridge, Dyker Heights, Bensonhurst, Bath Beach'};
    case 44.0:
            return {member: 'Kalman Yeger',
          neighborhood:'Bensonhurst, Borough Park, Midwood, Ocean Parkway'};
    case 45.0:
          return {member: 'Farah N. Louis',
        neighborhood:'Flatbush, East Flatbush, Midwood, Marine Park, Flatlands, Kensington'};
    case 46.0:
          return {member: 'Alan N. Maisel',
        neighborhood:'Bergen Beach, Canarsie, Flatlands, Georgetown, Gerritsen Beach, Marine Park, Mill Basin, Mill Island, Sheepshead Bay'};
    case 47.0:
          return {member: 'Mark Treyger',
        neighborhood:'Bensonhurst, Coney Island, Gravesend, Sea Gate'};
    case 48.0:
          return {member: 'Chaim M. Deutsch',
        neighborhood:'Brighton Beach, Manhattan Beach, Sheepshead Bay, Homecrest, Trump Village, Luna Park, Brightwater Towers, Midwood'};
    case 49.0:
          return {member: 'Deborah Rose',
        neighborhood:'Arlington, Clifton, Clove Lakes, Concord, Elm Park, Graniteville, Livingston, Mariners Harbor, New Brighton, Port Richmond, Randall Manor, Rosebank, St. George, Snug Harbor, Silver Lake, Stapleton, Sunnyside, West Brighton and Tompkinsville'};
    case 50.0:
          return {member: 'Steven Matteo',
        neighborhood:'Arrochar, Bloomfield, Bulls Head, Castleton Corners, Chelsea, Concord, Dongan Hills, Egbertville, Emerson Hill, Fort Wadsworth, Graniteville, Grant City, Grasmere, Heartland Village, Isle of Meadows, Lighthouse Hill, Manor Heights, Meiers Corners, Midland Beach, New Dorp, New Springville, Oakwood, Ocean Breeze, Old Town, Pralls Island, Richmondtown, Rosebank, Shore Acres, South Beach, Todt Hill, Travis, Westerleigh, and Willowbrook'};
    case 51.0:
          return {member: 'Joseph C. Borelli',
        neighborhood:'Annadale, Arden Heights, Bay Terrace, Charleston, Eltingville, Great Kills, Greenridge, Heartland Village, Huguenot, New Springville, Pleasant Plains, Prince’s Bay, Richmond Valley, Rossville, Tottenville, Woodrow'};
    }
    ;}

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
    data: '/data/bike-grades.geojson'
  });

  // add total population layer
  map.addLayer({
    'id': 'bike index',
    'type': 'fill',
    'source': 'bike-grades',
    'layout': {},
    'paint': {
      'fill-color':{
      property: 'index',
      stops: [
        [0, '#B32911'],
        [4, '#B32911'],
        [5, '#DB842C'],
        [9, '#DB842C'],
        [10,'#D6C815'],
        [19,'#D6C815'],
        [20,'#85CC8D'],
        [29,'#85CC8D'],
        [30,'#517CAD'],
        [40,'#517CAD']]},
      'fill-opacity': 0.6
    }
  })

  // add outlines
  map.addLayer({
    'id': 'dist-outlines',
    'type': 'line',
    'source': 'bike-grades',
    'layout': {},
    'paint': {
      'line-color': '#ffffff',
      'line-width': 0.4
    }
  });


  map.addSource('bike-routes', {
    type: 'geojson',
    data: '/data/bicycle-routes.geojson'
  });

  map.addLayer({
    'id': 'bike routes',
    'type': 'line',
    'source': 'bike-routes',
    'layout': {},
    'paint': {
      'line-color': '#039252',
      'line-width': 1.0
    }
  });


  map.addSource('highlight-feature', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: []
    }
  })

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

var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('mousemove', function (e) {
  var features = map.queryRenderedFeatures(e.point, {
      layers: ['bike index', 'bike routes'],
  });

if (features.length > 0) {
  var hoveredFeature = features[0]
  if (hoveredFeature.layer.id === 'bike index') {
  var dist = hoveredFeature.properties.coun_dist
  var rep = distMember(parseInt(hoveredFeature.properties.coun_dist)).member
  var nabe = distMember(parseInt(hoveredFeature.properties.coun_dist)).neighborhood
  var index = numberToString(hoveredFeature.properties.index)

  var popupContent = `
    <div class="popup">
      <b>Council District ${dist}</b><br/>
      ${rep} <br/>
      ${nabe} <br/>
      Bike Index: ${index}
    </div>`

    popup.setLngLat(e.lngLat).setHTML(popupContent).addTo(map);}

    else {
    var street = hoveredFeature.properties.street
    var fromstreet = hoveredFeature.properties.fromstreet
    var tostreet = hoveredFeature.properties.tostreet
    var lanetype = hoveredFeature.properties.tf_facilit

    var popupContent = `
      <div class="popup">
        <b> Street Name: ${street} </b><br/>
        From: ${fromstreet} <br/>
        To: ${tostreet} <br/>
        Lane Type: ${lanetype}
      </div>`

      popup.setLngLat(e.lngLat).setHTML(popupContent).addTo(map);
  }

    map.getSource('highlight-feature').setData(hoveredFeature.geometry);

    map.getCanvas().style.cursor = 'pointer';
}

else {
// remove the Popup
popup.remove();
map.getCanvas().style.cursor = '';
map.getSource('highlight-feature').setData({
      "type": "FeatureCollection",
      "features": []
  });
}
})


var toggleableLayerIds = ['bike routes'];

for (var i = 0; i < toggleableLayerIds.length; i++) {
  var id = toggleableLayerIds[i];

  var link = document.createElement('a');
  link.href = '#';
  link.className = 'active';
  link.textContent = id;

  link.onclick = function(e) {
    var clickedLayer = this.textContent;
    e.preventDefault();
    e.stopPropagation();

    var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

    if (visibility === 'visible') {
      map.setLayoutProperty(clickedLayer, 'visibility', 'none');
      this.className = '';
    } else {
      this.className = 'active';
      map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
    }
  };

  var layers = document.getElementById('menu');
  layers.appendChild(link);
}
