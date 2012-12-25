var WinChartsDrawer = function(url, container){
  this.given_url = url;
  this.given_container = container;
}

WinChartsDrawer.prototype.LoadDataFromServer = function(){
  var that = this;
  $.getJSON(this.given_url, function(data) {
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

  that.nir = items;
  $(that).trigger('done_loading');
  });
};

WinChartsDrawer.prototype.DrawTable = function(items_to_draw){
  console.log('will now draw all the items from server');
  var that = this;
  _(this.nir).each(function(key, value){
    console.log(value + ': ' + key)
    $(that.given_container).append("<p>" +value + ': ' + key + "</p>");
  });
};


