const mymap1 = L.map('map1').setView([37.76, -122.45], 12);
const tiles1 = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
});
tiles1.addTo(mymap1);
const mymap2 = L.map('map2').setView([34.07, -118.32], 10);
const tiles2 = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
});
tiles2.addTo(mymap2);
const mymap3 = L.map('map3').setView([37.80,  -122.20], 12);
const tiles3 = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
});
tiles3.addTo(mymap3);
const mymap4 = L.map('map4').setView([41.85,  -87.67], 10);
const tiles4 = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
});
tiles4.addTo(mymap4);

$(document).ready(function () {
  $("#sf-input").bind('keypress', function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      mymap1.eachLayer(function (layer) {
        mymap1.removeLayer(layer);
      });
      tiles1.addTo(mymap1);
      // let startInput = $('#start-input').val();
      let sfInput = $('#sf-input').val();
      $.ajax({
        url: `https://data.sfgov.org/resource/wg3w-h783.json?$where=incident_date between '${sfInput}T00:00:00' and '${sfInput}T23:59:59'`,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        for (let i = 0; i < response.length; i++) {
          if (response[i].latitude) {
            let date = moment(response[i].incident_datetime.slice(0, -13), 'YYYY-MM-DD').format('LL');
            let time = moment(response[i].incident_datetime.slice(11, -7), 'hh:mm').format('LT');
            let lat = parseFloat(response[i].latitude);
            let lon = parseFloat(response[i].longitude);
            L.marker([lat, lon]).addTo(mymap1).bindPopup(`
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
  $("#la-input").bind('keypress', function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      mymap2.eachLayer(function (layer) {
        mymap2.removeLayer(layer);
      });
      tiles2.addTo(mymap2);
      // let startInput = $('#start-input').val();
      let laInput = $('#la-input').val();
      $.ajax({
        url: `https://data.lacity.org/resource/2nrs-mtv8.json?$where=date_occ between '${laInput}T00:00:00' and '${laInput}T23:59:59'`,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        for (let i = 0; i < response.length; i++) {
          if (response[i].lat) {
            let date = moment(response[i].date_occ.slice(0, -13), 'YYYY-MM-DD').format('LL');
            let day = moment(response[i].date_occ.slice(0, -13), 'YYYY-MM-DD').format('dddd');
            let lat = parseFloat(response[i].lat);
            let lon = parseFloat(response[i].lon);
            L.marker([lat, lon]).addTo(mymap2).bindPopup(`
              <strong>${response[i].crm_cd_desc}</strong>
              <br>
              ${day}, ${date}
              <br>
              ${response[i].area_name}: ${response[i].location}
              <br>
              Resolution: ${response[i].status_desc}
            `);
          }
        }
      });
    }
  });
  $("#oakland-input").bind('keypress', function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      mymap3.eachLayer(function (layer) {
        mymap3.removeLayer(layer);
      });
      tiles3.addTo(mymap3);
      // let startInput = $('#start-input').val();
      let oaklandInput = $('#oakland-input').val();
      $.ajax({
        url: `https://data.oaklandnet.com/resource/ym6k-rx7a.json?$where=datetime between '${oaklandInput}T00:00:00' and '${oaklandInput}T23:59:59'`,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        for (let i = 0; i < response.length; i++) {
          if (response[i].location_1.latitude) {
            let date = moment(response[i].datetime.slice(0, -13), 'YYYY-MM-DD').format('LL');
            let time = moment(response[i].datetime.slice(11, -7), 'hh:mm').format('LT');
            let day = moment(response[i].datetime.slice(0, -13), 'YYYY-MM-DD').format('dddd');
            let lat = parseFloat(response[i].location_1.latitude);
            let lon = parseFloat(response[i].location_1.longitude);
            L.marker([lat, lon]).addTo(mymap3).bindPopup(`
              <strong>${response[i].crimetype}: ${response[i].description}</strong>
              <br>
              ${time}: ${day}, ${date}
              <br>
              ${response[i].address}, ${response[i].city}
            `);
          }
        }
      });
    }
  });
  $("#chicago-input").bind('keypress', function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      mymap4.eachLayer(function (layer) {
        mymap4.removeLayer(layer);
      });
      tiles4.addTo(mymap4);
      // let startInput = $('#start-input').val();
      let chicagoInput = $('#chicago-input').val();
      $.ajax({
        url: `https://data.cityofchicago.org/resource/ijzp-q8t2.json?$where=date between '${chicagoInput}T00:00:00' and '${chicagoInput}T23:59:59'`,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        for (let i = 0; i < response.length; i++) {
          if (response[i].latitude) {
            let date = moment(response[i].date.slice(0, -13), 'YYYY-MM-DD').format('LL');
            let time = moment(response[i].date.slice(11, -7), 'hh:mm').format('LT');
            let day = moment(response[i].date.slice(0, -13), 'YYYY-MM-DD').format('dddd');
            let lat = parseFloat(response[i].latitude) || parseFloat(response[i].location.latitude);
            let lon = parseFloat(response[i].longitude) || parseFloat(response[i].location.longitude);
            L.marker([lat, lon]).addTo(mymap4).bindPopup(`
              <strong>${response[i].primary_type}: ${response[i].description}</strong>
              <br>
              ${time}: ${day}, ${date}
              <br>
              ${response[i].location_description} ON ${response[i].block}
            `);
          }
        }
      });
    }
  });
});