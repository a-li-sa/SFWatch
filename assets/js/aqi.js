$.ajax({
  url: `https://api.waqi.info/feed/san%20francisco/?token=1521a117e43f1022ec8671e68b12abadfab81831`,
  method: "GET",
}).then(function (response) {
  $('#aqi').text(response.data.aqi);
});