var app = angular.module('camperNews', []);

app.controller('newsController', function ($scope, $http) {
  
  $http.get('http://www.freecodecamp.com/news/hot')
    .then(function (response) {

      var news = response.data;
      var topStories = [];
      
    
      // add a sequential id to each news item in the original order
      // and add a default thumbnail image if story doesn't have one
      for (var i = 0; i < news.length; i++) {
        news[i]._id = i;
        if (!news[i].image) {
          //news[i].image = "http://lorempixel.com/400/400/abstract";
        }
      }

      for (var i = 0; i < 6; i++) {
        topStories.push(news[i]);
      }
    
      $scope.topStories = topStories;
      $scope.news = news;
    
      $scope.sortOrder = "_id";
      $scope.changeOrder = function(order){
        $scope.sortOrder = order;
      };

    })

})

;