(function () {
    'use strict';
    
    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.inject = ['$scope'];
    function MsgController($scope) {
        $scope.name = "Itachi";
        $scope.stateOfBeing = "amaterasu";

        $scope.sayMessage = function () {
            return "Itachi is a hidden hero character in naruto!"
        };

        $scope.amaterasu =function () {
            $scope.stateOfBeing = "amaterasu";
        }
    }

}) ();
