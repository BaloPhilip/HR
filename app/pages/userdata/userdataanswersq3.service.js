'use strict';

angular
    .module('userdataanswersq3.service', [
        'ngResource',
        'api.config'
    ])
    .factory('Userdataanswersq3Service', ['$resource', 'API_CONFIG',
        function ($resource, API_CONFIG) {
            return $resource(API_CONFIG.URL + 'user/:user_id/answers/57a44ae93420027d90aa7786', {
                user_id: '@user_id'
            }, {});
        }
    ]);