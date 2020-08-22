var policeStationArray = [
    {
      stationName: "Bayview Police Station",
      Address: "201 Williams Ave, San Francisco, CA 94124",
      Abbr: "bayviewStation",
      lng: 37.729664,
      lat: -122.398086,
    },
    {
      stationName: "Central Police Station",
      Address: "766 Vallejo St, San Francisco, CA 94133",
      Abbr: "centralStation",
      lng: 37.798645,
      lat: -122.409862,
    },
    {
      stationName: "Ingleside Police Station",
      Address: "1 Sgt John V Young Ln, San Francisco, CA 94112",
      Abbr: "inglesideStation",
      lng: 37.72477,
      lat: -122.446225,
    },
    {
      stationName: "Mission Police Station",
      Address: "630 Valencia St, San Francisco, CA 94110",
      Abbr: "missionStation",
      lng: 37.76268,
      lat: -122.421969,
    },
    {
      stationName: "Northern Police Station",
      Address: "1125 Filmore St, San Francisco, CA 94110",
      Abbr: "northernStation",
      lng: 37.780161,
      lat: -122.43239,
    },
    {
      stationName: "Park Police Station",
      Address: "1899 Waller St, San Francisco, CA 94158",
      Abbr: "parkStation",
      lng: 37.767848,
      lat: -122.455266,
    },
    {
      stationName: "Richmond Police Station",
      Address: "461 6th Ave, San Francisco, CA 94118",
      Abbr: "richmondStation",
      lng: 37.780001,
      lat: -122.46446,
    },
    {
      stationName: "Southern Police Station",
      Address: "850 Bryant St, San Francisco, CA 94116",
      Abbr: "southernStation",
      lng: 37.774988,
      lat: -122.404328,
    },
    {
      stationName: "Taraval Police Station",
      Address: "2345 24th Ave, San Francisco, CA 94116",
      Abbr: "taravalStation",
      lng: 37.743733,
      lat: -122.48146,
    },
    {
      stationName: "Tenderloin Police Station",
      Address: "301 Eddy St, San Francisco, CA 94102",
      Abbr: "tenderloinStation",
      lng: 37.783704,
      lat: -122.412895,
    },
  ];
  // var marker = L.marker([lat, lng]).addTo(mymap1);
  // let lat = policeStationArray.lat;
  // let lng = policeStationArray.lng;
  const policeColor = 'blue';
  $('#policeStationButton').on('click', function () {
    for (let i = 0; i < policeStationArray.length; i++) {
      if (policeStationArray.stationName !== '') {
        let lat = policeStationArray[i].lat;
        let lon = policeStationArray[i].lng;
        var marker = L.marker([lat, lon]).addTo(mymap1);
        console.log(marker);
          // L.circle([lat, lon], {
          // color: policeColor,
          // fillColor: policeColor,
          // fillOpacity: 0.5,
          // radius: 60
        // });
      }
    }
  });