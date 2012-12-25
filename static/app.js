var drawer2;
$(document).ready(function(){

  $('#char_type_selector').change(function(e){
    var new_type = $('#char_type_selector').find(':selected').text();
    drawer2.ChangeChartType(new_type);
  });

  drawer2 = new WinChartsDrawer('/get_users', $('#table2'), 'Device Model');

  drawer2.LoadDataFromServer();
  $(drawer2).bind('done_loading', function(e){
    drawer2.DrawTable();
  });



  $.getJSON('/get_users', function(data) {
    console.log('im back from server');
  });


});
