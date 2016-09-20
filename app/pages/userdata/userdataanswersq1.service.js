'use strict';

angular.module('userdataanswersq1.service', [
    'ngResource',
    'api.config'
])
.factory('Userdataanswersq1Service', ['$resource', 'API_CONFIG',
    function ($resource, API_CONFIG) {
        return $resource(API_CONFIG.URL + 'user/:user_id/answers/57a44ac43420027d90aa7784', {
            user_id: '@user_id'
        }, {});
    }
]);