$(document).ready(function(){

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

    _.map(items, function (value, key) {
          text =  key + '=' + value;
          $('ul').append($('<li>').html(text));
      })


  });

});
