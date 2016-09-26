'use strict';

angular
    .module('hrAppAdmin')
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/users', {
                    template: '<users></users>'
                })
                .when('/user/:user_id', {
                    template: '<userdata></userdata>'
                })
                .otherwise('/users');
        }
    ]);
