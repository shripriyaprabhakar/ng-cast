angular.module('video-player')
  .service('youTube', function($http) {
    // TODO
    this.getVideo = function(word, callback) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          'maxResults': 5,
          'part': 'snippet',
          'q': word,
          'type': 'video',
          'videoEmbeddable': true,
          'key': 'AIzaSyB6HJawn1aRNSmczGDf11K9C-PbcecJ1k8'
        }
      //
      }).then(function(params) {
      // console.log(params);
        callback(params.data.items);
      });
    //
    };
  });