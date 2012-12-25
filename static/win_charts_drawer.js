var WinChartsDrawer = function(url, container, attribute_to_sum){
  this.given_url = url;
  this.given_container = container;
  this.attribute_to_sum = attribute_to_sum;
}

WinChartsDrawer.prototype.LoadDataFromServer = function(){
  var that = this;
  $.getJSON(this.given_url, function(data) {
    var items = {};
    that.events_count = that.GetArrayOfAttributesAmount(data);
    $(that).trigger('done_loading');

  });
};

WinChartsDrawer.prototype.GetArrayOfAttributesAmount = function(data){
  var items = {};

  var that = this;
  $.each(data, function(key, val) {
    if (items[val[that.attribute_to_sum]] === undefined){
      items[val[that.attribute_to_sum]] = 0;
    }
    else{
      items[val[that.attribute_to_sum]]++;
    }
  });

  var new_array = [];
  new_array.push(['Event', 'Amount']);

  _.map(items, function (value, key) {
        new_array.push([key, value]);
    })

  return new_array;

};

WinChartsDrawer.prototype.DrawTable = function(items_to_draw){
  var that = this;
  google.load("visualization", "1", {packages:["corechart"],callback: function(){
  
    console.log('this is callback');

    that.good_data = 
      google.visualization.arrayToDataTable(that.events_count);

    that.options = {
      title: 'Events Aitpalgut',
      hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
    };

    that.chart = new google.visualization.PieChart
                 (document.getElementById('table'));
    that.chart.draw(that.good_data, that.options);
  
  }});
};


WinChartsDrawer.prototype.ChangeChartType = function (new_chart_type){
    if (new_chart_type == 'pie'){
      this.chart = new google.visualization.PieChart
                   (document.getElementById('table'));
    }
    else if (new_chart_type == 'column'){
      this.chart = new google.visualization.ColumnChart
                   (document.getElementById('table'));
    }
    else if (new_chart_type == 'line'){
      this.chart = new google.visualization.LineChart
                   (document.getElementById('table'));
    }

    this.chart.draw(this.good_data, this.options);
};

