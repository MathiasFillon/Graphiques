'use strict';

angular.module("components")
    .component("doughnut", {

        templateUrl: './js/component/controller/cercle/cercle.html',

        controller: function () {
            this.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
            this.data = [300, 500, 100];
        }
    });