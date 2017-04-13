var chart;
var chartData = [{
    "month": "Fevrier",
    "note": 5
}, {
    "month": "Mars",
    "note": 2
}, {
    "month": "Avril",
    "note": 8
}, {
    "month": "Mai",
    "note": 9
}, {
    "month": "Juin",
    "note": 4
}, {
    "month": "Juillet",
    "note": 9
}, {
    "month": "Aout",
    "note": 1
}, {
    "month": "Septembre",
    "note": 3
}, {
    "month": "Octobre",
    "note": 7
}, {
    "month": "Novembre",
    "note": 5
}, {
    "month": "Decembre",
    "note": 8
}, {
    "month": "Janvier",
    "note": 3.5
}];

function handleClick(event) {
    document.getElementById("resultat").innerHTML = event.item.category + " : " + event.item.values.value;
}

function scrollLine() {
  //change value of line in guide
  var valueAxes = new AmCharts.ValueAxis();
  var guides = new AmCharts.Guide;
  guides.value = 9;
  valueAxes.addGuide(guides);
  chart.addValueAxis(valueAxes);
  chart.validateNow();
  chart.write("chartdiv");
}

AmCharts.ready(function() {
  chart = new AmCharts.AmSerialChart();
  chart.dataProvider = chartData;
  chart.categoryField = "month";

  chart.addListener("clickGraphItem", handleClick);

  var categoryAxis = chart.categoryAxis;
  categoryAxis.labelRotation = 30;
  categoryAxis.gridPosition = "start";

  var graph = new AmCharts.AmGraph();
  graph.valueField = "note";
  graph.bullet = "round";
  graph.id = "g1"
  graph.bulletBorderAlpha = 1;
  graph.bulletColor = "#FFFFFF";
  graph.bulletSize = 7;
  graph.lineThickness = 2;
  graph.title = "Note";
  graph.type = "smoothedLine";
  graph.useLineColorForBulletBorder = true;
  chart.addGraph(graph);

  var chartCursor = new AmCharts.ChartCursor();
  chartCursor.valueLineEnabled = false;
  chartCursor.valueLineBalloonEnabled = true;
  chartCursor.valueLineAlpha = 0.5;
  chartCursor.fullWidth = true;
  chartCursor.cursorAlpha = 0.05;
  chart.addChartCursor(chartCursor);

  var valueAxes = new AmCharts.ValueAxis();
  valueAxes.dashLength = 1;
  valueAxes.position = "left";
  var guides = new AmCharts.Guide;
  guides.inside = true;
  guides.lineAlpha = 1;
  guides.value = 5;
  valueAxes.addGuide(guides);
  chart.addValueAxis(valueAxes);

  chart.write("chartdiv");
});

$(function() {
  $('#weight').on('input', function() {

  });

  $.getJSON('opinion_keyWord.json',function(data){
    $("#resultat").empty();
    $("#resultat").append('<div class="col-md-6">Mots cles positifs : </div><div class="col-md-6">Avis : </div>');
    $.each(data,function(index,d){
      var key;
      $.each(d.listeKeyP,function(index,dk){
        key = dk.key + '<br/>';
      });
      $('#resultat').append('<div class="col-md-6">' + key + '</div>');
      $('#resultat').append('<div class="col-md-6">' + d.opinion + '</div>');
    });
  });
});
