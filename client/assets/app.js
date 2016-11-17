var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
  $routeProvider
  .when('/edit',{
    templateUrl: 'partials/edit.html'
  })
  .when('/new', {
    templateUrl: 'partials/new.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});

// FACTORIES
app.factory('FriendsFactory', function($http){
  var factory = {};

  factory.create_friend = function(info, callback){
    $http.post('/add_friend').success(function(output){
      callback(output);
    })
    console.log(info);
  }
  return factory;
});
// CLIENT CONTROLLERS
app.controller('mainController', function($scope, FriendsFactory){
  $scope.addingfriend = function(){
    insertfriend = {name: $scope.newfriend.first_name,
                    created_at: new Date() };
    FriendsFactory.create_friend(insertfriend, function(data){
      console.log('success');

    });
  }
})
