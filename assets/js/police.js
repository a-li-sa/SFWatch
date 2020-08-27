var policeStationArray = [
  {
    stationName: "Bayview Police Station",
    address: "201 Williams Ave, San Francisco, CA 94124",
    phone: "415-671-2300",
    abbr: "bayviewStation",
    lng: 37.729664,
    lat: -122.398086,
  },
  {
    stationName: "Central Police Station",
    address: "766 Vallejo St, San Francisco, CA 94133",
    phone: "415-315-2400",
    abbr: "centralStation",
    lng: 37.798645,
    lat: -122.409862,
  },
  {
    stationName: "Ingleside Police Station",
    address: "1 Sgt John V Young Ln, San Francisco, CA 94112",
    phone: "415-404-4000",
    abbr: "inglesideStation",
    lng: 37.72477,
    lat: -122.446225,
  },
  {
    stationName: "Mission Police Station",
    address: "630 Valencia St, San Francisco, CA 94110",
    phone: "415-558-5400",
    abbr: "missionStation",
    lng: 37.76268,
    lat: -122.421969,
  },
  {
    stationName: "Northern Police Station",
    address: "1125 Filmore St, San Francisco, CA 94110",
    phone: "415-614-3400",
    abbr: "northernStation",
    lng: 37.780161,
    lat: -122.43239,
  },
  {
    stationName: "Park Police Station",
    address: "1899 Waller St, San Francisco, CA 94158",
    phone: "415-242-3000",
    abbr: "parkStation",
    lng: 37.767848,
    lat: -122.455266,
  },
  {
    stationName: "Richmond Police Station",
    address: "461 6th Ave, San Francisco, CA 94118",
    phone: "415-666-8000",
    abbr: "richmondStation",
    lng: 37.780001,
    lat: -122.46446,
  },
  {
    stationName: "Southern Police Station",
    address: "850 Bryant St, San Francisco, CA 94116",
    phone: "415-553-1373",
    abbr: "southernStation",
    lng: 37.774988,
    lat: -122.404328,
  },
  {
    stationName: "Taraval Police Station",
    address: "2345 24th Ave, San Francisco, CA 94116",
    phone: "415-759-3100",
    abbr: "taravalStation",
    lng: 37.743733,
    lat: -122.48146,
  },
  {
    stationName: "Tenderloin Police Station",
    address: "301 Eddy St, San Francisco, CA 94102",
    phone: "415-345-7300",
    abbr: "tenderloinStation",
    lng: 37.783704,
    lat: -122.412895,
  },
];

const policeColor = "blue";

// $('#policeStationButton').on('click', function () {
//   for (let i = 0; i < policeStationArray.length; i++) {
//     if (policeStationArray.stationName !== '') {
//       let lat = policeStationArray[i].lat;
//       let lon = policeStationArray[i].lng;
//       let policeStation = policeStationArray[i].stationName
//       let policeAddress = policeStationArray[i].address;
//       let policePhone = policeStationArray[i].phone;
//       var marker = L.marker([lon, lat]).addTo(mymap1).addTo(mymap1).bindPopup(`
//       <strong>${policeStation}</strong>
//       <br>
//       ${policeAddress}
//       <br>
//       ${policePhone}
//     `);
//     }
//   }
// });

function policeMarkers() {
  for (let i = 0; i < policeStationArray.length; i++) {
    if (policeStationArray.stationName !== "") {
      let lat = policeStationArray[i].lat;
      let lon = policeStationArray[i].lng;
      let policeStation = policeStationArray[i].stationName;
      let policeAddress = policeStationArray[i].address;
      let policePhone = policeStationArray[i].phone;
      var marker = L.marker([lon, lat]).addTo(mymap1).addTo(mymap1).bindPopup(`
      <strong>${policeStation}</strong>
      <br>
      ${policeAddress}
      <br>
      ${policePhone}
    `);
      $(marker._icon).addClass("police-stations marker-icon");
    }
  }
}

policeMarkers();

$("#policeStationButton").on("click", function () {
  $(".police-stations").toggle();
});
