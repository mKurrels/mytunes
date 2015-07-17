// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    }, this);

    this.on('ended', function(song){
      song.set('number', song.get('number') + 1);
      this.shift();
      if(this.length > 0){
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      if(this.at(0) === song){
        song.trigger('ended');
      } else{
        this.remove(song);
      }
    }, this);

  },

  playFirst: function(){
    this.at(0).play();
  }

  // remove: function() {
  //   this.models.shift();
  //   this.length--;
  // }


});