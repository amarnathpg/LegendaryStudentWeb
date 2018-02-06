'use strict';

angular.module('legendaryStudentApp')
    .service('registerService', function RegisterService($resource, lat, long) {
        return $resource("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=AIzaSyCYnpPc44UwQniobihd5LZmeG-FsU02rSc");
    });

angular.module('legendaryStudentApp').factory('registerService', ['$resource', '$q', function ($resource, $q) {
    return {
        //Code edited to create a function as when you require service it returns object by default so you can't return function directly. That's what understand...
        getAddress: function (lat, long) {
            var q = $q.defer();
            var User = $resource("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=AIzaSyCYnpPc44UwQniobihd5LZmeG-FsU02rSc");
            
            return User;
        }
    }
}]);