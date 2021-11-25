(function () {
    'use strict';
    
    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.inject = ['$scope'];
    function MsgController($scope) {
        $scope.name = "Itachi";
        $scope.stateOfBeing = "tsukuyomi";

        $scope.sayMessage = function () {
            return "You are now under my genjutso!"
        };

        $scope.usedGenjutsu =function () {
            $scope.stateOfBeing = "tsukuyomi";
        }
    }

}) ();
