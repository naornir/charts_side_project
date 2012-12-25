DataView = Backbone.View.extend({
  el: $('body'),
  render: function(){
    console.log('ya kaki');
    $(this.el).append($("<p>yallla</p>"));
  },


});



bla = new DataView();
bla.render();
