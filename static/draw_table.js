function WinChartsDrawer(array_to_draw, container){
  this.chart_array = array_to_draw;
  this.container_to_draw_on = container;
}

WinChartsDrawer.prototype.draw = function(){
  google.load("visualization", "1", {packages:["corechart"]});
  google.setOnLoadCallback(this.drawChart);
};


WinChartsDrawer.prototype.drawChart =  function drawChart() {
  var array = ['Event', 'Amount'];

  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ]);

  var options = {
    title: 'Company Performance',
    hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
  };

  var chart = new google.visualization.ColumnChart(this.container_to_draw_on);
  chart.draw(data, options);
};
