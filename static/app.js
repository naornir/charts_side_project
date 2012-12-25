$(document).ready(function(){
  //var drawer = new WinChartsDrawer('/get_data', $('#table'));

  //drawer.LoadDataFromServer();
  //$(drawer).bind('done_loading', function(e){
    //drawer.DrawTable();
  //});

  var drawer2 = new WinChartsDrawer('/get_users', $('#table'), 'Device Model');

  drawer2.LoadDataFromServer();
  $(drawer2).bind('done_loading', function(e){
    drawer2.DrawTable();
  });
});
