  google.load("visualization", "1", {packages:["corechart"]});
  google.setOnLoadCallback(draw);

  function draw(){
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

    var options = {
      title: 'Events Aitpalgut',
      hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
    };

    var chart = new google.visualization.ColumnChart
                 (document.getElementById('table'));
    chart.draw(data, options);


  });

  }

