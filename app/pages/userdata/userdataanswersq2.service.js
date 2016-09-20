'use strict';

angular.module('userdataanswersq2.service', [
    'ngResource',
    'api.config'
]).
factory('Userdataanswersq2Service', ['$resource', 'API_CONFIG',
    function ($resource, API_CONFIG) {
        return $resource(API_CONFIG.URL + 'user/:user_id/answers/57a44ad73420027d90aa7785', {
            user_id: '@user_id'
        }, {});
    }
]);