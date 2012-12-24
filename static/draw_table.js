google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);

function drawChart() {


  var array = ['Event', 'Amount'];

  //for (var i = 0; i < window.all_items.length; i += 1) {
    //bla = window.all_items[i];
    //array.push([bla[0], bla[1]]);
  //};


  //var data = google.visualization.arrayToDataTable(array
  //);

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

  var chart = new google.visualization.ColumnChart(document.getElementById
                                                   ('table'));
  chart.draw(data, options);
}
