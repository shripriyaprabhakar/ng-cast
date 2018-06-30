angular.module('video-player')
  .component('videoListEntry', {
    // TODO
    bindings: {
      video: '<',
      onClick: '<'
    },
    
    // controller: function() {
    //   this.video = window.exampleVideoData;
    // },
    templateUrl: 'src/templates/videoListEntry.html'
  });
