'use strict';

function userDataCtrl(UserDataService, ANSWERS_CONFIG, $routeParams) {

    var vm = this,
        answers_q1,
        answers_q2,
        answers_q3;

    vm.user_id = $routeParams.user_id;

    // Получение данных пользователя с БП

    UserDataService.fetchUserData.get({user_id: vm.user_id}).$promise.then(function (result) {

        vm.result = result;

    });

    // Получение ответов Теста №1

    UserDataService.fetchAnswersQuestionnaire1.get({user_id: vm.user_id}).$promise.then(function (result) {

        answers_q1 = result;

        // Анализ полученных ответов
        // ANSWERS_CONFIG.QUESTIONNAIRE_1 - схема вычисления результата Теста №1

        vm.total_q1 = {
            competitive: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_1[0], answers_q1, 11),
            partnership: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_1[1], answers_q1, 11),
            compromise: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_1[2], answers_q1, 11),
            avoiding: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_1[3], answers_q1, 11),
            collaborative: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_1[4], answers_q1, 11)
        };

    });

    // Получение ответов Теста №2

    UserDataService.fetchAnswersQuestionnaire2.get({user_id: vm.user_id}).$promise.then(function (result) {

        answers_q2 = result;

        // Анализ полученных ответов
        // ANSWERS_CONFIG.QUESTIONNAIRE_2 - схема вычисления результата Теста №2

        vm.total_q2 = {
            finance: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_2[0], answers_q2, 6),
            recognition: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_2[1], answers_q2, 6),
            responsibility: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_2[2], answers_q2, 6),
            relationship_leadership: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_2[3], answers_q2, 6),
            career: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_2[4], answers_q2, 6),
            achievements: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_2[5], answers_q2, 6),
            content_work: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_2[6], answers_q2, 6),
            cooperation: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_2[7], answers_q2, 6)
        };

    });

    // Получение ответов Теста №3

    UserDataService.fetchAnswersQuestionnaire3.get({user_id: vm.user_id}).$promise.then(function (result) {

        answers_q3 = result;

        // Анализ полученных ответов
        // ANSWERS_CONFIG.QUESTIONNAIRE_3 - схема вычисления результата Теста №3

        vm.total_q3 = {
            implementor: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_3[0], answers_q3, 6),
            coordinator: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_3[1], answers_q3, 6),
            creator: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_3[2], answers_q3, 6),
            idea_generator: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_3[3], answers_q3, 6),
            researcher: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_3[4], answers_q3, 6),
            expert: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_3[5], answers_q3, 6),
            diplomat: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_3[6], answers_q3, 6),
            executor: UserDataService.calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_3[7], answers_q3, 6)
        };

    });

}

angular
    .module('userdata').component('userdata', {
    templateUrl: 'pages/userdata/userdata.template.html',

    controller: ('UserDataCtrl', ['UserDataService', 'ANSWERS_CONFIG', '$routeParams', userDataCtrl])
});
