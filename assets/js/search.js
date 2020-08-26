const mymap1 = L.map("map1").setView([37.76, -122.45], 12);
const tiles1 = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 19,
  }
);
tiles1.addTo(mymap1);

$(document).ready(function () {

  $(".clear").on("click", function () {
    mymap1.eachLayer(function (layer) {
      mymap1.removeLayer(layer);
    });
    tiles1.addTo(mymap1);
  });

  $("#search-btn").on("click", renderSFResults);

  function renderSFResults() {
    mymap1.eachLayer(function (layer) {
      mymap1.removeLayer(layer);
    });
    tiles1.addTo(mymap1);
    // let startInput = $('#start-input').val();
    let sfInput = $("#sf-input").val();
    let sfInputEnd = $("#sf-input-end").val();
    let startTime = "";
    let endTime = "";
    if ($("#sfTime").val() === "Morning") {
      startTime = "00:00";
      endTime = "08:00";
    } else if ($("#sfTime").val() === "Afternoon") {
      startTime = "08:00";
      endTime = "16:00";
    } else if ($("#sfTime").val() === "Evening") {
      startTime = "16:00";
      endTime = "23:59";
    } else {
      startTime = "00:00";
      endTime = "23:59";
    }

    let crimeInput = "";

    if ($("#sfCrimeType").val() === "AA") {
      crimeInput = "&incident_subcategory=Aggravated Assault";
    } else if ($("#sfCrimeType").val() === "ARS") {
      crimeInput = "&incident_subcategory=Arson";
    } else if ($("#sfCrimeType").val() === "BC") {
      crimeInput = "&incident_subcategory=Bad Checks";
    } else if ($("#sfCrimeType").val() === "BURG") {
      crimeInput = "&incident_subcategory=Burglary - Other";
    } else if ($("#sfCrimeType").val() === "DRNK") {
      crimeInput = "&incident_subcategory=Drunkenness";
    } else if ($("#sfCrimeType").val() === "EB") {
      crimeInput = "&incident_subcategory=Extortion-Blackmail";
    } else if ($("#sfCrimeType").val() === "FO") {
      crimeInput = "&incident_subcategory=Family Offenses";
    } else if ($("#sfCrimeType").val() === "FRD") {
      crimeInput = "&incident_subcategory=Fraud";
    } else if ($("#sfCrimeType").val() === "LAR-V") {
      crimeInput = "&incident_subcategory=Larceny - From Vehicle";
    } else if ($("#sfCrimeType").val() === "LAR-O") {
      crimeInput = "&incident_subcategory=Larceny Theft - From Building";
    } else if ($("#sfCrimeType").val() === "LAR-B") {
      crimeInput = "&incident_subcategory=Larceny Theft - Other";
    } else if ($("#sfCrimeType").val() === "LP") {
      crimeInput = "&incident_subcategory=Lost Property";
    } else if ($("#sfCrimeType").val() === "MP") {
      crimeInput = "&incident_subcategory=Missing Person";
    } else if ($("#sfCrimeType").val() === "MVT") {
      crimeInput = "&incident_subcategory=Motor Vehicle Theft";
    } else if ($("#sfCrimeType").val() === "NC") {
      crimeInput = "&incident_subcategory=Non-Criminal";
    } else if ($("#sfCrimeType").val() === "RV") {
      crimeInput = "&incident_subcategory=Recovered Vehicle";
    } else if ($("#sfCrimeType").val() === "ROB-O") {
      crimeInput = "&incident_subcategory=Robbery - Other";
    } else if ($("#sfCrimeType").val() === "SA") {
      crimeInput = "&incident_subcategory=Simple Assault";
    } else if ($("#sfCrimeType").val() === "SP") {
      crimeInput = "&incident_subcategory=Stolen Property";
    } else if ($("#sfCrimeType").val() === "SO") {
      crimeInput = "&incident_subcategory=Suspicious Occ";
    } else if ($("#sfCrimeType").val() === "TFV") {
      crimeInput = "&incident_subcategory=Theft From Vehicle";
    } else if ($("#sfCrimeType").val() === "TC-HR") {
      crimeInput = "&incident_subcategory=Traffic Collision - Hit & Run";
    } else if ($("#sfCrimeType").val() === "TRS") {
      crimeInput = "&incident_subcategory=Trespass";
    } else if ($("#sfCrimeType").val() === "VAN") {
      crimeInput = "&incident_subcategory=Vandalism";
    } else if ($("#sfCrimeType").val() === "OTH") {
      crimeInput = "&incident_subcategory=Other";
    } else {
      crimeInput = "";
    }

    $.ajax({
      url: `https://data.sfgov.org/resource/wg3w-h783.json?$where=incident_datetime between '${sfInput}T00:00:00' and '${sfInputEnd}T23:59:59' AND incident_time between '${startTime}' and '${endTime}' ${crimeInput}`,
      method: "GET",
    }).then(function (response) {
      for (let i = 0; i < response.length; i++) {
        if (response[i].latitude) {
          let date = moment(
            response[i].incident_datetime.slice(0, -13),
            "YYYY-MM-DD"
          ).format("LL");
          let time = moment(
            response[i].incident_datetime.slice(11, -7),
            "hh:mm"
          ).format("LT");
          let lat = parseFloat(response[i].latitude);
          let lon = parseFloat(response[i].longitude);

          if (response[i].resolution === "Open or Active") {
            circleColor = "red";
          } else {
            circleColor = "yellow";
          }
          fireRadius = 90;
          L.circle([lat, lon], {
            color: circleColor,
            fillColor: circleColor,
            fillOpacity: 0.5,
            radius: 60,
          }).addTo(mymap1).bindPopup(`
            <strong>${response[i].incident_description}</strong>
            <br>
            ${time} - ${response[i].incident_day_of_week}, ${date}
            <br>
            ${response[i].analysis_neighborhood}: ${response[i].intersection}
            <br>
            Resolution: ${response[i].resolution}
          `);
        }
      }
    });
  }
});