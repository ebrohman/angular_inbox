var app = angular.module("testApp", []);
app.controller("MailCtrl", function($scope){
  $scope.emails = [{from: "Eric", message: "Hey man...how's javascript?"}];
  $scope.count = $scope.emails.length;

  $scope.addEmail = function () {
    $scope.emails.push ({
      from: $scope.from,
      message: $scope.message
    });
    $scope.from = "";
    $scope.message = "";
    $scope.composeVisible = false;
    $scope.count = $scope.count + 1;
  };
});




