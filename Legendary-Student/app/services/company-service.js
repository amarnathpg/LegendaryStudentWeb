'use strict';

angular.module('legendaryStudentApp')
  .service('CompanyService', function CompanyService($resource) {
    return $resource('companies.json');
  });
