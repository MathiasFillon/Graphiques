'use strict';

angular.module("components")
    .component("doughnut", {

        templateUrl: './js/component/controller/cercle/cercle.html',

        controller: function () {

            this.getNumbers = () => {
                let table = [];
                table[0] = Math.random();
                table[1] = 1 - table[0];

                return table;
            }

            this.labels = ["Score", "Reste"];
            this.data1 = this.getNumbers();
            this.data2 = this.getNumbers();
            this.data3 = this.getNumbers();
        }
    });