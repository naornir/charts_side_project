DataView = Backbone.View.extend({
  el: $('body'),
  render: function(){
    this.draw_table();
  },
  set_data: function(data_to_set){
    this.events_count =
      this.get_array_of_attributes_amount(data_to_set['results']['data'],
                                         data_to_set['results']['params']);

    this.title = this.get_title(data_to_set['results']['client_headers']);
  },
  get_title: function(client_headers){
    return "This will be the title"
  },
  attribute_to_sum: 'Device Model',

    /// This array should be at the end in the format of 
    // [
         //[ 'Platform', 'FarmVielle', 'AngryBirds', SlotsCraze' ] 
         //[ 'Android',  '100',        '200 ',       '300' ] 
         //[ 'Iphone',   '5000',       '300 ',       '400' ] 
         //[ 'Nokia',    '5000',       '300 ',       '400' ] 
    // ]
  get_array_of_attributes_amount: function(data_to_set, params){
    var result_table = [];

    var level = 0;
    result_table[ level ] = this.header( data_to_set, params, level );

    category_values = this.categoriesAndValuesArray(data_to_set, 0 , 2);

    _(category_values).each(function(each_array){
      result_table.push(each_array);
    });

    return result_table;
  },


  header: function (data_to_set, params, level ) { 
    result =  [this.getUniqueValuesByIndex(data_to_set, level + 1) ];
    result.unshift(params[ level ] );
    result =  _( result ).flatten();
    return result;
  } ,


  getUniqueValuesByIndex: function ( arrayOfArrays, index_to_retrive ) { 
    var secondary_category_unique_values = {};

    _.each(arrayOfArrays, function ( element, index, list){
      secondary_category_unique_values[ element[ index_to_retrive ] ] = 'bla';
    } );

    return _(secondary_category_unique_values).keys();
  },

  categoriesAndValuesArray: function ( arrayOfArrays, categoryIndex, valueOfCategoryIndex ) { 
    var result_array = [ ];
    var category_values = {}

    _.each(arrayOfArrays, function (value) {
      var category = value[ categoryIndex ]
      if (category_values[category] === undefined){
        category_values[category] = []
      }
      category_values[category].push( value [ valueOfCategoryIndex ] );
      })

    _.each(category_values, function(value, key, list){
      value.unshift(key);
      result_array.push(value);
    });

    return result_array;
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
        title: that.title,
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
    bla.set_data(data);
    bla.render();
  });

$('#char_type_selector').change(function(e){
  var new_type = $('#char_type_selector').find(':selected').text();
  bla.change_chart_type(new_type);
});
