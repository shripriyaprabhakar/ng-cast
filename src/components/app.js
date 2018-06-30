angular.module('video-player')

  .component('app', {
    // TODO
    

    controller: function() {
      this.videos = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      //debugger;
      this.handleClick = (video) => {
        console.log('clicked');
        console.log(video);
        this.currentVideo = video; 
      };
    },

    templateUrl: 'src/templates/app.html'
  });
