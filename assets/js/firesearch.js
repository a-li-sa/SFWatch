$("#search-btn-fire").on("click", renderFireResults);

  function renderFireResults() {
    // mymap1.eachLayer(function (layer) {
    //   mymap1.removeLayer(layer);
    // });
    // tiles1.addTo(mymap1);
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
      url: `https://data.sfgov.org/resource/wr8u-xric.json?$where=alarm_dttm between '${sfInput}T${startTime}' and '${sfInputEnd}T${endTime}'`,
      method: "GET",
    }).then(function (response) {
      for (let i = 0; i < response.length; i++) {
        if (response[i].point.coordinates[1]) {
          let date = moment(
            response[i].alarm_dttm.slice(0, -13),
            "YYYY-MM-DD"
          ).format("LL");
          let day = moment(
            response[i].alarm_dttm.slice(0, -13),
            "YYYY-MM-DD"
          ).format("dddd");
          let time = moment(
            response[i].alarm_dttm.slice(11, -7),
            "hh:mm"
          ).format("LT");
          let lat = response[i].point.coordinates[1];
          let lon = response[i].point.coordinates[0];
          L.circle([lat, lon], {
            color: 'red',
            fillColor: 'red',
            fillOpacity: 0.5,
            radius: 60,
          }).addTo(mymap1).bindPopup(`
            <strong>${response[i].primary_situation.slice(4)}</strong>
            <br>
            ${time} - ${day}, ${date}
            <br>
            ${response[i].analysis_neighborhood}: ${response[i].address}
            <br>
            Location Type: ${response[i].property_use.slice(4)}
            <br>
            Action Taken: ${response[i].action_taken_primary.slice(3)}
            <br>
            Civilian Fatalities: ${response[i].civilian_fatalities}
            <br>
            Civilian Injuries: ${response[i].civilian_injuries}
          `);
        }
      }
    });
  }