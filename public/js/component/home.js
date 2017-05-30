'use strict';

angular.module("app")
    .component("home", {

        templateUrl: '../views/home.html',

        bindings: {
            info: '<'
        },

        controller: function ($log, MainService) {

            this.$onInit = () => {
                $log.info('home component init');
                $log.log(this.info);
            };
        }
    });