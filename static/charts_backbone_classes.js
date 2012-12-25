//(function ($) {
    var WinChartModel = Backbone.Model.extend({
        defaults: {
          title: "This is the win chart"
        }
    });

    var WinChartView = Backbone.View.extend({
      el: $('#table2'),
      initialize: function(){
      },
      render: function(){
        this.$el.html("<p>then it comes...</p>");
      }
    });


//} (jQuery));
