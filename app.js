(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope) {
  $scope.inputData="";
  $scope.colorCode="";
  $scope.check=function (data) {
    var msg="";
    var count=0;
    var array=data.split(",");

    for (var i = 0; i < array.length; i++) {
      if(array[i]!=""){
        count=count+1;
      }
    }

    if(data==""){
      msg="Please enter data first";
      $scope.colorCode="FF0000";
    }
    else if(count<=3){
      msg="Enjoy!";
      $scope.colorCode="008000";
    }
    else if (count>3) {
      msg="Too much!";
      $scope.colorCode="008000";
    }

    $scope.decission=function () {
      return msg;
    }
  }
}

})();
