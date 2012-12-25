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


});



bla = new DataView();
  $.getJSON('/get_users', function(data) {
    console.log('im back from server');
    bla.set_data(data);
  });

bla.render();
