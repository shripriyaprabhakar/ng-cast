angular.module('video-player')

  .component('app', {
    // TODO
    

    controller: function(youTube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      
      this.setVideo = (videos) => {
        // console.log(videos);
        this.videos = videos;
        this.currentVideo = videos[0];
      };
      
      this.handleSearch = (query) => {

        youTube.getVideo(query, this.setVideo);
      };

      this.handleClick = (video) => {
      
        this.currentVideo = video; 
        
      };
    },

    templateUrl: 'src/templates/app.html'
  });
