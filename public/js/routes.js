'use strict';

angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/home',
      component: 'home',
      resolve: {
        info: function (MainService) {
          return MainService.getInfo();
        }
      }
    })

  $urlRouterProvider.otherwise('/home');
})