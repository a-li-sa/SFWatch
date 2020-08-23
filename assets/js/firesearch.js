$("#search-btn-fire").on("click", renderFireResults);

  function renderFireResults() {
    mymap1.eachLayer(function (layer) {
      mymap1.removeLayer(layer);
    });
    tiles1.addTo(mymap1);
    // let startInput = $('#start-input').val();
    let sfInput = $("#sf-input-fire").val();
    let sfInputEnd = $("#sf-input-end-fire").val();
    let startTime = "";
    let endTime = "";
    if ($("#sfTimeFire").val() === "Morning") {
      startTime = "00:00:00";
      endTime = "08:00:00";
    } else if ($("#sfTimeFire").val() === "Afternoon") {
      startTime = "08:00:00";
      endTime = "16:00:00";
    } else if ($("#sfTimeFire").val() === "Evening") {
      startTime = "16:00:00";
      endTime = "23:59:59";
    } else {
      startTime = "00:00:00";
      endTime = "23:59:59";
    }

    $.ajax({
      url: `https://data.sfgov.org/resource/wr8u-xric.json?$where=incident_date between '${sfInput}T${startTime}' and '${sfInputEnd}T${endTime}'`,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      // for (let i = 0; i < response.length; i++) {
      //   log(response[i].incident_subcategory);
      //   if (response[i].latitude) {
      //     let date = moment(
      //       response[i].incident_datetime.slice(0, -13),
      //       "YYYY-MM-DD"
      //     ).format("LL");
      //     let time = moment(
      //       response[i].incident_datetime.slice(11, -7),
      //       "hh:mm"
      //     ).format("LT");
      //     let lat = parseFloat(response[i].latitude);
      //     let lon = parseFloat(response[i].longitude);

      //     if (response[i].resolution === "Open or Active") {
      //       circleColor = "red";
      //     } else {
      //       circleColor = "yellow";
      //     }
      //     fireRadius = 90;
      //     L.circle([lat, lon], {
      //       color: circleColor,
      //       fillColor: circleColor,
      //       fillOpacity: 0.5,
      //       radius: 60,
      //     }).addTo(mymap1).bindPopup(`
      //       <strong>${response[i].incident_description}</strong>
      //       <br>
      //       ${time} - ${response[i].incident_day_of_week}, ${date}
      //       <br>
      //       ${response[i].analysis_neighborhood}: ${response[i].intersection}
      //       <br>
      //       Resolution: ${response[i].resolution}
      //     `);
      //   }
      // }
    });
  }