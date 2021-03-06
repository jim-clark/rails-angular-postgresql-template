(function() {
  'use strict';

  window.app = angular.module('app', [
    'ngResource',
    'ngAnimate',
    'ui.router',
    'templates'
  ])

  // set up the app's routes
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider) {

      // send security token to rails with every angular http request
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

      $stateProvider

        .state('shell', {
          abstract: true,
          url: '',
          templateUrl: 'shell/shell.html',
          // template: "<p>test</p>",
          controller: 'ShellController',
          controllerAs: 'shell'
          // resolve: {
          //   currentUser: ['UserResource', '$rootScope',
          //     function(UserResource, $rootScope) {
          //       return UserResource.show({id: user_id}).$promise;
          //     }]
          // }
        })

        .state('shell.home', {
          url: '/home',
          templateUrl: 'home/home.html',
          controller: 'HomeController',
          controllerAs: 'vm'
        })

       // Other states will go here

      ;  // $stateProvider chaining

      $urlRouterProvider.otherwise('/home');

  }]);  // .config

})();