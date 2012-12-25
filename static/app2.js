DataView = Backbone.View.extend({
  el: $('body'),
  render: function(){
    console.log('ya kaki');
    $(this.el).append($("<p>yallla</p>"));
  },
  set_data: function(data_to_set){
    this.events_count =
      this.get_array_of_attributes_amount(data_to_set);
  },
  attribute_to_sum: 'Device Model',
  get_array_of_attributes_amount: function(data){
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
  },

  draw_table:function(){
    var that = this;

    google.load("visualization", "1", {
      packages:["corechart"],callback:function(){ 
      that.events_count_as_google_array = 
        google.visualization.arrayToDataTable(that.events_count);

      that.options = {
        title: 'Events Aitpalgut',
        hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
      };

      that.chart = new google.visualization.PieChart
                   (document.getElementById('table'));
      that.chart.draw(that.events_count_as_google_array , that.options);
    
    }});

  },


});



bla = new DataView();
  $.getJSON('/get_users', function(data) {
    console.log('im back from server');
    bla.set_data(data);
    bla.draw_table();
  });

bla.render();
