'use strict';

angular.module('legendaryStudentApp')
    .controller('RegisterController', function ($scope, registerService) {
        //Flip function
        $scope.IsVisible = false;
        $scope.Flip = function () {
            $scope.IsVisible = $scope.IsVisible ? false : true;
            //angular.element(document.querySelector('#divStudent')).addClass('');
            //angular.element(document.querySelector('#divSchool')).addClass('');
        }
        //Register fuonction
        $scope.Register = function(){
        
        }

        //Load address
        $scope.position = [];
        $scope.currentLocation = function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    $scope.$apply(function () {
                        registerService.getAddress(position.coords.latitude, position.coords.longitude).
                        get().$promise.then(function (loc) {
                            $scope.position = loc.results;
                            var len=$scope.position[0].address_components.length;
                            $scope.Address = $scope.position[0].formatted_address
                            $scope.City = $scope.position[0].address_components[len - 5].long_name
                            $scope.State = $scope.position[0].address_components[len - 3].long_name
                            $scope.Country = $scope.position[0].address_components[len - 2].long_name
                            $scope.Zip = $scope.position[0].address_components[len - 1].long_name
                            //$scope.Country = $scope.Address.find(x => x.types.indexOf('country') > -1).take(1).map(x => x.long_name);
                        });
                    });
                });
            }
        };

        (function initialize() {
            $scope.currentLocation();
            //$scope.mapOptions = {
            //    mapTypeControl: true,
            //    zoom: 15,
            //    mapTypeId: google.maps.MapTypeId.ROADMAP,
            //    center: location
            //};
        })();

        
    });