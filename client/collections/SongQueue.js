// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  },

  playFirst: function(){

  },

  

  events: {
    'add': function() {
      console.log('hellO!')
      this.model.playFirst();
      // this.model.play();
      // this.model.enqueue();
    }
  }


});