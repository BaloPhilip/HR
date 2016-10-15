'use strict';

function userDataService($resource, API_CONFIG) {

    // Ресурс для получения данных пользователя с БД
    var fetchUserData = $resource(API_CONFIG.URL + 'user/:user_id', {
        user_id: '@user_id'
    }, {});

    // Ресурс для получения ответов на Тест №1 с БД
    var fetchAnswersQuestionnaire1 = $resource(API_CONFIG.URL + 'user/:user_id/answers/57a44ac43420027d90aa7784', {
        user_id: '@user_id'
    }, {});

    // Ресурс для получения ответов на Тест №2 с БД
    var fetchAnswersQuestionnaire2 = $resource(API_CONFIG.URL + 'user/:user_id/answers/57a44ad73420027d90aa7785', {
        user_id: '@user_id'
    }, {});

    // Ресурс для получения ответов на Тест №3 с БД
    var fetchAnswersQuestionnaire3 = $resource(API_CONFIG.URL + 'user/:user_id/answers/57a44ae93420027d90aa7786', {
        user_id: '@user_id'
    }, {});

    return {
        fetchUserData: fetchUserData,
        fetchAnswersQuestionnaire1: fetchAnswersQuestionnaire1,
        fetchAnswersQuestionnaire2: fetchAnswersQuestionnaire2,
        fetchAnswersQuestionnaire3: fetchAnswersQuestionnaire3,
        calculate_total: calculate_total
    };

    // Обработка результата тестов
    function calculate_total(answers_config, questionnaire, number_cells) {
        var sum = 0;

        for (var i = 0; i <= number_cells; i++) {
            sum += (questionnaire.userAnswer[answers_config.index_answer[i]].answer[answers_config.index_question[i]])
        }

        return sum;
    }

}

angular
    .module('userdata.service', [
        'ngResource',
        'api.config'
    ])
    .factory('UserDataService', ['$resource', 'API_CONFIG', userDataService]);