'use strict';

angular.module('users').component('users', {
    templateUrl: 'pages/users/users.template.html',

    controller: ['UsersService',
        function HrUsers(UsersService) {

            var _this = this;

            UsersService.get().$promise.then(function (result) {

                _this.result = result;

            });

        }]
});
