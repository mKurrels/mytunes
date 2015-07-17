// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",
  
  initialize: function(){
    console.log('initialize, sqv')
    this.collection.on('add remove', this.render, this);
    this.render();
  },

  // events: {
  //   'click': function() {
  //     debugger;
  //     if(this.model.at(0) === this.model)
  //     this.model.dequeue();
  //   }
  // },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
