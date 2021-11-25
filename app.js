(function () {
    'use strict';
    
    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.inject = ['$scope'];
    function MsgController($scope) {
        $scope.name = "Itachi";
        $scope.stateOfBeing = "under genjutsu";

        $scope.sayMessage = function () {
            return "Itachi is a hidden hero character in naruto!"
        };

        $scope.genjutsu =function () {
            $scope.stateOfBeing = "under genjutsu";
        }
    }

}) ();
