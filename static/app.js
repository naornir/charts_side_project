$(document).ready(function(){
  var drawer = new WinChartsDrawer('/get_data', $('#table'));

  drawer.LoadDataFromServer();
  $(drawer).bind('done_loading', function(e){
    drawer.DrawTable();
  });

});
