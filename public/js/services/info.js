'use strict';

const SERVER_URL = 'http://localhost:8080/api/dashboard'

angular.module('app')

  .service('MainService', function ($http, $log, $q) {

    this.getInfo = () => {
      let defer = $q.defer();

      $http.get(SERVER_URL).then((result) => {
        defer.resolve(result.data);
      }).catch((error) => {
        defer.reject(error);
      });

      return defer.promise;
    }
  })