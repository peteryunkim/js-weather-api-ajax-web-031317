function getFahrenheits(result){
  return result.hourly_forecast.map(function(f){
    // console.log(f.temp.english)
    return f.temp.english
  })
}

function getHours(result){
  return result.hourly_forecast.map(function(f){
    // console.log(f.FCTTIME.hour)
    return f.FCTTIME.hour
  })
}

function generateDataSet(labels, data) {
  var obj = {
	labels: labels,
	datasets: [
		{
			fillColor: "rgba(220,220,220,0.2)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: data
		},
	]}
;
return obj
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    method: 'get',
    url: endpoint,
    dataType: 'json',
    success: success
  })
}
