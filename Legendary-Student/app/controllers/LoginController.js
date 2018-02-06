'use strict';
angular
    .module('legendaryStudentApp',[])
    .controller('LoginController', function ($scope) {

        // Set the default value of inputType
        $scope.inputType = 'password';

        // Hide & show password function
        $scope.hideShowPassword = function () {
            if ($scope.inputType == 'password')
                $scope.inputType = 'text';
            else
                $scope.inputType = 'password';
        };

        

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