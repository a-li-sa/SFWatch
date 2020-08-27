$.ajax({
  url: `https://data.sfgov.org/resource/tvq9-ec9w.json?`,
  method: "GET",
}).then(function (response) {
  let positiveTestNumber = 0;
  let deathCount = 0;
  let contact = 0;
  let community = 0;
  for (let i = 0; i < response.length; i++) {
    let count = parseInt(response[i].case_count);
    positiveTestNumber += count;
    if (response[i].case_disposition === "Death") {
      deathCount++;
    }
    if (response[i].transmission_category === "From Contact") {
      contact++;
    }
    if (response[i].transmission_category === "Community") {
      community++;
    }
  }
  let $h4 = $("<h4>").text(`As of ${moment().format("LL")}`);
  let $positiveTestNumber = $("<p>").text(
    `Number of Confirmed Cases: ${positiveTestNumber}`
  );
  let $deathCount = $("<p>").text(`Number of Deaths: ${deathCount}`);

  $("#sf-description").append($h4, $positiveTestNumber, $deathCount);
});

var covidArray = [
  {
    siteName: "UCSF Laurel Heights Campus",
    address: "3333 California St, San Francisco, CA 94118",
    phone: "415-476-8868",
    abbr: "ucsflaurelheights",
    appointment: "Required",
    referral: "Required",
    testing: "Tests Limited to Certain Patients",
    drive: "Drive-Through Allowed",
    lng: 37.78636,
    lat: -122.44844,
  },
  {
    siteName: "COVID-19 Community-Based Testing Site",
    address: "98 Coral Rd, San Francisco, CA 94107",
    phone: "Phone Number Unavailable",
    abbr: "communitySite",
    appointment: "Required",
    referral: "Not Required",
    testing: "Tests Limited to Certain Patients",
    drive: "Drive-Through Allowed",
    lng: 37.754039,
    lat: -122.399529,
  },
  {
    siteName: "Forward",
    address: "180 Sutter St, San Francisco, CA 94104",
    phone: "833-334-6393",
    abbr: "forward",
    appointment: "Required",
    referral: "Required",
    testing: "Tests Limited to Certain Patients",
    drive: "Drive-Through Not Allowed",
    lng: 37.790108,
    lat: -122.403676,
  },
  {
    siteName: "One Medical",
    address: "595 Castro St, San Francisco, CA 94114",
    phone: "415-529-4099",
    abbr: "oneMedical",
    appointment: "Required",
    referral: "Required",
    testing: "Testing For All Patients",
    drive: "Drive-Through Not Allowed",
    lng: 37.7596,
    lat: -122.43456,
  },
  {
    siteName: "CVS",
    address: "377 32nd Ave, San Francisco, CA 94121",
    phone: "415-666-3153",
    abbr: "cvs",
    appointment: "Required",
    referral: "Not Required",
    testing: "Tests Limited to Certain Patients",
    drive: "Drive-Through Allowed",
    lng: 37.782184,
    lat: -122.492915,
  },
  {
    siteName: "San Francisco VA Medical Center",
    address: "4150 Clement St, San Francisco, CA 94121",
    phone: "415-221-4810",
    abbr: "vaCenter",
    appointment: "Required",
    referral: "Required",
    testing: "Tests Limited to Certain Patients",
    drive: "Drive-Through Not Allowed",
    lng: 37.7821,
    lat: -122.505073,
  },
  {
    siteName: "CityTest SF - Soma",
    address: "600 7th St, San Francisco, CA 94103",
    phone: "415-682-1740",
    abbr: "cityTestSoma",
    appointment: "Required",
    referral: "Not Required",
    testing: "Testing for All Patients",
    drive: "Drive-Through Allowed",
    lng: 37.772999,
    lat: -122.403225,
  },
  {
    siteName: "Castro-Mission Health Center Temporary Clinic",
    address: "995 Potrero Ave Building 80, San Francisco, CA 94110",
    phone: "415-682-1740",
    abbr: "castroMission",
    appointment: "Required",
    referral: "Not Required",
    testing: "Tests Limited to Certain Patients",
    drive: "Drive-Through Not Allowed",
    lng: 37.757429,
    lat: -122.406165,
  },
  {
    siteName: "CityTest SF - Pier 30/32",
    address: "599 The Embarcadero, San Francisco, CA 94107",
    phone: "415-701-2311",
    abbr: "cityTestPier",
    appointment: "Required",
    referral: "Not Required",
    testing: "Tests Limited to Certain Patients",
    drive: "Drive-Through Allowed",
    lng: 37.785876,
    lat: -122.387516,
  },
  {
    siteName: "Dignity Health-GoHealth Urgent Care",
    address: "2288 Market St, San Francisco, CA 94114",
    phone: "415-964-4855",
    abbr: "dignity",
    appointment: "Required",
    referral: "Required",
    testing: "Testing for All Patients",
    drive: "Drive-Through Allowed",
    lng: 37.764813,
    lat: -122.432837,
  },
  {
    siteName: "Carbon Health San Francisco-Castro",
    address: "1998 Market St, San Francisco, CA 94102",
    phone: "415-792-6040",
    abbr: "carbonCastro",
    appointment: "Not Required",
    referral: "Not Required",
    testing: "Tests Limited to Certain Patients",
    drive: "Drive-Through Not Allowed",
    lng: 37.770033,
    lat: -122.426242,
  },
  {
    siteName: "Sutter Urgent Care - San Francisco",
    address: "55 2nd St Ground Floor, San Francisco, CA 94105",
    phone: "415-600-6990",
    abbr: "sutter",
    appointment: "Required",
    referral: "Not Required",
    testing: "Testing for All Patients",
    drive: "Drive-Through Not Allowed",
    lng: 37.7889,
    lat: -122.400313,
  },
  {
    siteName: "Carbon Health Pop-Up Covid-19 Testing Center",
    address: "470 Brannan St, San Francisco, CA 94107",
    phone: "415-906-7643",
    abbr: "carbonPop",
    appointment: "Required",
    referral: "Not Required",
    testing: "Testing for All Patients",
    drive: "Drive-Through Not Allowed",
    lng: 37.778804,
    lat: -122.396521,
  },
];

const covidColor = "yellow";

// $('#covidButton').on('click', function () {
//   for (let i = 0; i < covidArray.length; i++) {
//     if (covidArray.siteName !== '') {
//       let lat = covidArray[i].lat;
//       let lon = covidArray[i].lng;
//       let covid = covidArray[i].siteName
//       let covidAddress = covidArray[i].address;
//       let covidPhone = covidArray[i].phone;
//       let covidAppointment = covidArray[i].appointment;
//       let covidReferral = covidArray[i].referral;
//       let covidTesting = covidArray[i].testing;
//       let covidDrive = covidArray[i].drive;
//     L.marker([lon, lat]).addTo(mymap1).bindPopup(`
//       <strong>${covid}</strong>
//       <br>
//       ${covidAddress}
//       <br>
//       ${covidPhone}
//       <br>
//       ${"Appointment" + " " + covidAppointment}
//       <br>
//       ${"Referral" + " " + covidReferral}
//       <br>
//       ${covidTesting}
//       <br>
//       ${covidDrive}
//     `);
//     }
//   }
// });

function covidMarkers() {
  for (let i = 0; i < covidArray.length; i++) {
    if (covidArray.siteName !== "") {
      let lat = covidArray[i].lat;
      let lon = covidArray[i].lng;
      let covid = covidArray[i].siteName;
      let covidAddress = covidArray[i].address;
      let covidPhone = covidArray[i].phone;
      let covidAppointment = covidArray[i].appointment;
      let covidReferral = covidArray[i].referral;
      let covidTesting = covidArray[i].testing;
      let covidDrive = covidArray[i].drive;
      var marker = L.marker([lon, lat]).addTo(mymap1).bindPopup(`
        <strong>${covid}</strong>
        <br>
        ${covidAddress}
        <br>
        ${covidPhone}
        <br>
        ${"Appointment" + " " + covidAppointment}
        <br>
        ${"Referral" + " " + covidReferral}
        <br>
        ${covidTesting}
        <br>
        ${covidDrive}
      `);
      $(marker._icon).addClass("covid-testing marker-icon");
    }
  }
}

covidMarkers();

$("#covidButton").on("click", function () {
  $(".covid-testing").toggle();
});
