// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(song){

    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    }, this);

    this.on('ended', function(){
      this.remove();
      if(this.length > 0){
        this.playFirst();
      }
    }, this);

  },

  playFirst: function(){
    // console.log('heyeyeyeyeye')
  }, 

  remove: function() {
    this.models.shift();
    this.length--;
  }


});