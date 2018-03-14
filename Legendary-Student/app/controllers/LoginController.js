'use strict';
angular
    .module('legendaryStudentApp', [])
    .controller('LoginController', function ($scope) {

        // Set the default value of inputType
        $scope.inputType = 'password';
        $scope.passwordIcons = "glyphicon glyphicon-eye-close";

        // Hide & show password function
        $scope.hideShowPassword = function () {
            if ($scope.inputType == 'password') {
                $scope.inputType = 'text';
                $scope.passwordIcons = "glyphicon glyphicon-eye-open";
            }
            else {
                $scope.inputType = 'password';
                $scope.passwordIcons = "glyphicon glyphicon-eye-close";
            }
        };

        $scope.login = function () {
            if ($scope.email && $scope.pwd) {

            }
        }

        function TemplateController($scope) {
            $scope.myTemplate = 'Template1';
        }


        //// Populate watchlists for dynamic nav links
        //$scope.watchlists = WatchlistService.query();

        //// Using the $location.path() function as a $watch expression
        //$scope.$watch(function () {
        //    return $location.path();
        //}, function (path) {
        //    if (_.contains(path, 'watchlist')) {
        //        $scope.activeView = 'watchlist';
        //    } else {
        //        $scope.activeView = 'dashboard';
        //    }
        //});
    });