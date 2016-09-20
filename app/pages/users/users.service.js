'use strict';

angular.module('users.service', [
    'ngResource',
    'api.config'
]).
factory('UsersService', ['$resource', 'API_CONFIG',
    function ($resource, API_CONFIG) {
        return $resource(API_CONFIG.URL + 'signup', {}, {});
    }
]);