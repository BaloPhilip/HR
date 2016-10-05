'use strict';

function usersService($resource, API_CONFIG) {

    return $resource(API_CONFIG.URL + 'signup', {}, {});

}

angular
    .module('users.service', [
        'ngResource',
        'api.config'
    ])
    .factory('UsersService', ['$resource', 'API_CONFIG', usersService]);