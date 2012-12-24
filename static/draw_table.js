  google.load("visualization", "1", {packages:["corechart"]});
  google.setOnLoadCallback(draw_ya_maniak);

  function draw_ya_maniak(){
    console.log('this is draw chart');
    var array = ['Event', 'Amount'];

    

  $.getJSON('/get_data', function(data) {
    var items = {};
    var attribute_to_sum = 'Event';

    $.each(data, function(key, val) {
      if (items[val[attribute_to_sum]] === undefined){
        items[val[attribute_to_sum]] = 0;
      }
      else{
        items[val[attribute_to_sum]]++;
      }
    });


    var new_array = [];
    new_array.push(['Event', 'Amount']);

    _.map(items, function (value, key) {
          new_array.push([key, value]);
          text =  key + '=' + value;
          $('ul').append($('<li>').html(text));

      })

    var data = google.visualization.arrayToDataTable(new_array);
    

      
    //var data = google.visualization.arrayToDataTable([
      //['Year', 'Sales', 'Expenses'],
      //['2004',  1000,      400],
      //['2005',  1170,      460],
      //['2006',  660,       1120],
      //['2007',  1030,      540]
    //]);

    var options = {
      title: 'Company Performance',
      hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
    };

    var chart = new google.visualization.ColumnChart
                 (document.getElementById('table'));
    chart.draw(data, options);


  });

  }

