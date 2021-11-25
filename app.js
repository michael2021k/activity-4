(function () {
    'use strict';
    
    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.inject = ['$scope'];
    function MsgController($scope) {
        $scope.name = "Itachi";
        $scope.stateOfBeing = "genjutso";

        $scope.sayMessage = function () {
            return "You are now under my Genjutso!"
        };

        $scope.tsukuyomiItachi = function () {
            $scope.stateOfBeing = "tsukuyomi";
        }
    }

}) ();
