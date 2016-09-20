'use strict';

angular.module('userdata').component('userdata', {
    templateUrl: 'pages/userdata/userdata.template.html',

    controller: ['UserdataService', 'Userdataanswersq1Service', 'Userdataanswersq2Service', 'Userdataanswersq3Service', 'ANSWERS_CONFIG', '$routeParams',

        function HrUserData(UserdataService, Userdataanswersq1Service, Userdataanswersq2Service, Userdataanswersq3Service, ANSWERS_CONFIG, $routeParams) {

            var _this = this,
                answers_q1,
                answers_q2,
                answers_q3;

            var calculate_total = function (answer, questionnaire, cells) {
                var sum = 0;

                for (var i = 0; i <= cells; i++) {
                    sum += (questionnaire.userAnswer[answer.index_answer[i]].answer[answer.index_question[i]])
                }

                return sum;
            };

            UserdataService.get({user_id: $routeParams.user_id}).$promise.then(function (result) {

                _this.result = result;

            });

            Userdataanswersq1Service.get({user_id: $routeParams.user_id}).$promise.then(function (result) {

                answers_q1 = result;

                _this.total_q1 = {
                    competitive: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_1[0], answers_q1, 11),
                    partnership: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_1[1], answers_q1, 11),
                    compromise: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_1[2], answers_q1, 11),
                    avoiding: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_1[3], answers_q1, 11),
                    collaborative: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_1[4], answers_q1, 11)
                };

            });

            Userdataanswersq2Service.get({user_id: $routeParams.user_id}).$promise.then(function (result) {

                answers_q2 = result;

                _this.total_q2 = {
                    finance: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_2[0], answers_q2, 6),
                    recognition: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_2[1], answers_q2, 6),
                    responsibility: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_2[2], answers_q2, 6),
                    relationship_leadership: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_2[3], answers_q2, 6),
                    career: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_2[4], answers_q2, 6),
                    achievements: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_2[5], answers_q2, 6),
                    content_work: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_2[6], answers_q2, 6),
                    cooperation: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_2[7], answers_q2, 6)
                };

            });

            Userdataanswersq3Service.get({user_id: $routeParams.user_id}).$promise.then(function (result) {

                answers_q3 = result;

                _this.total_q3 = {
                    implementor: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_3[0], answers_q3, 6),
                    coordinator: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_3[1], answers_q3, 6),
                    creator: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_3[2], answers_q3, 6),
                    idea_generator: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_3[3], answers_q3, 6),
                    researcher: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_3[4], answers_q3, 6),
                    expert: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_3[5], answers_q3, 6),
                    diplomat: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_3[6], answers_q3, 6),
                    executor: calculate_total(ANSWERS_CONFIG.QUESTIONNAIRE_3[7], answers_q3, 6)
                };

            });

        }]

});
