var drawer2;
$(document).ready(function(){
  //var drawer = new WinChartsDrawer('/get_data', $('#table'));

  //drawer.LoadDataFromServer();
  //$(drawer).bind('done_loading', function(e){
    //drawer.DrawTable();
  //});
  //

  $('#char_type_selector').change(function(e){
    console.log(e);
    var new_type = $('#char_type_selector').find(':selected').text();
    drawer2.ChangeChartType(new_type);

    
  });

  drawer2 = new WinChartsDrawer('/get_users', $('#table2'), 'Device Model');

  drawer2.LoadDataFromServer();
  $(drawer2).bind('done_loading', function(e){
    drawer2.DrawTable();
  });
});
