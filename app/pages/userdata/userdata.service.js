'use strict';

angular
    .module('userdata.service', [
        'ngResource',
        'api.config'
    ])
    .factory('UserdataService', ['$resource', 'API_CONFIG',
        function ($resource, API_CONFIG) {
            return $resource(API_CONFIG.URL + 'user/:user_id', {
                user_id: '@user_id'
            }, {});
        }
    ]);