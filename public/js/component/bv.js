'use strict';

angular.module("app")
    .component("barreVerticale", {

        templateUrl: '../views/bv.html',

        controller: function () {

            this.$onInit = () => {
                this.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
                this.series = ['Ventes BtB', 'Ventes BtC'];
                this.data = [
                    [65, 59, 80, 81, 56, 55, 40],
                    [28, 48, 40, 19, 86, 27, 90]
                ];
            }
        }
    });