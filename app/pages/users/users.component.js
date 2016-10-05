'use strict';

function usersCtrl (UsersService) {

    var vm = this;

    // Получение всех зарегистрированных пользователей с БП

    UsersService.get().$promise.then(function (result) {
        vm.result = result;
    });

}

angular
    .module('users').component('users', {
    templateUrl: 'pages/users/users.template.html',
    controller: ('UsersCtrl', ['UsersService', usersCtrl])
});
