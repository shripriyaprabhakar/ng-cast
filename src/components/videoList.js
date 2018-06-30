angular.module('video-player')
  .component('videoList', {
    // TODO
    bindings: {
      videos: '<',
      onClick: '<'  
    },
    
    // controller: function() {
    //   this.video = this.videos[0];
    // },

    templateUrl: 'src/templates/videoList.html'
  });

