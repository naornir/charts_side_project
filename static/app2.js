DataView = Backbone.View.extend({
  el: $('body'),
  render: function(){
    this.draw_table();
  },
  set_data: function(data_to_set){
    this.events_count =
      this.get_array_of_attributes_amount(data_to_set);
  },
  attribute_to_sum: 'Device Model',
  get_array_of_attributes_amount: function(data_to_set){
    var new_array = [];
    new_array.push(['Event', 'Amount']);

    _.each(data_to_set, function (value) {
          new_array.push(value);
      })
    return new_array;
  },

  draw_table:function(){
    var that = this;
   
    //google.load("visualization", "1", {
      //packages:["corechart"],callback:this.check_context});

    google.load("visualization", "1", {
      packages:["corechart"],callback:function(){ 
      that.events_count_as_google_array = 
        google.visualization.arrayToDataTable(that.events_count);

      that.options = {
        title: 'Events Aitpalgut',
        hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
      };

      if (that.chart === undefined){
        that.chart = new google.visualization.PieChart
                     (document.getElementById('table'));
      }

      that.chart.draw(that.events_count_as_google_array , that.options);
    
    }});

  },

  check_context: function(){
    var nir = 5;
    console.log('ma iei');
  },

  change_chart_type: function(new_chart_type){
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
    this.render();

  },

});



bla = new DataView();
  $.getJSON('/get_json_sample', function(data) {
    bla.set_data(data['results']['data']);
    bla.render();
  });

$('#char_type_selector').change(function(e){
  var new_type = $('#char_type_selector').find(':selected').text();
  bla.change_chart_type(new_type);
});
