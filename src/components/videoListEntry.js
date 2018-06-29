angular.module('video-player')
  .component('videoListEntry', {
    // TODO
    bindings: {
      video: '<'
    },
    
    // controller: function() {
    //   this.video = window.exampleVideoData;
    // },
    templateUrl: 'src/templates/videoListEntry.html'
  });
