var drawer2;
$(document).ready(function(){

  $('#char_type_selector').change(function(e){
    var new_type = $('#char_type_selector').find(':selected').text();
    drawer2.ChangeChartType(new_type);
  });

  drawer2 = new WinChartsDrawer('/get_users', $('#table2'), 'Device Model');


  $.getJSON('/get_users', function(data) {
    console.log('im back from server');
    drawer2.SetData(data);
    drawer2.DrawTable();
  });


});
