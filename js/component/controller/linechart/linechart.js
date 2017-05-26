'use strict';

angular.module("components")
  .component("lineChart", {

    templateUrl: './js/component/controller/linechart/linechart.html',

    controller: function () {
      this.labels = ["January", "February", "March", "April", "May", "June", "July"];
      this.series = ['BtC', 'BtB'];
      this.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ];
      this.onClick = function (points, evt) {
        console.log(points, evt);
      };
      this.datasetOverride = [{
        yAxisID: 'y-axis-1'
      }, {
        yAxisID: 'y-axis-2'
      }];
      this.options = {
        scales: {
          yAxes: [{
              id: 'y-axis-1',
              type: 'linear',
              display: true,
              position: 'left'
            },
            {
              id: 'y-axis-2',
              type: 'linear',
              display: true,
              position: 'right'
            }
          ]
        }
      };
    }
  });