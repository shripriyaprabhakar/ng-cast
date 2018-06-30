angular.module('video-player')
  .service('youTube', function(callback) {
    // TODO
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        'maxResults': 5,
        'part': 'snippet',
        'q': '',
        'type': 'video',
        'videoEmbeddable': true,
        'key': 'AIzaSyB6HJawn1aRNSmczGDf11K9C-PbcecJ1k8'
      }
    }).then(callback).catch(error);
  });