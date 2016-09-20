'use strict';

angular.
module('answers.config', [])
    .constant('ANSWERS_CONFIG', {
        QUESTIONNAIRE_1: [
            {
                index_answer: [2, 5, 7, 8, 9, 12, 13, 15, 16, 21, 24, 27],
                index_question: [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0]
            }, {
                index_answer: [1, 4, 7, 10, 13, 18, 19, 20, 22, 25, 27, 29],
                index_question: [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1]
            }, {
                index_answer: [1, 3, 6, 9, 11, 12, 17, 19, 21, 23, 25, 28],
                index_question: [0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0]
            }, {
                index_answer: [0, 4, 5, 6, 8, 11, 14, 16, 18, 22, 26, 28],
                index_question: [0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1]
            }, {
                index_answer: [0, 2, 3, 10, 14, 15, 17, 20, 23, 24, 26, 29],
                index_question: [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0]
            }
        ],
        QUESTIONNAIRE_2: [
            {
                index_answer: [0, 3, 6, 7, 10, 17, 22],
                index_question: [0, 1, 1, 1, 1, 0, 1]
            }, {
                index_answer: [0, 4, 8, 9, 11, 14, 24],
                index_question: [1, 0, 1, 0, 1, 1, 0]
            }, {
                index_answer: [1, 6, 8, 12, 13, 16, 23],
                index_question: [1, 0, 0, 1, 0, 0, 0]
            }, {
                index_answer: [1, 2, 7, 9, 15, 19, 20],
                index_question: [0, 0, 0, 1, 1, 1, 0]
            }, {
                index_answer: [3, 13, 18, 20, 21, 24, 25],
                index_question: [0, 1, 0, 1, 1, 1, 1]
            }, {
                index_answer: [10, 14, 18, 19, 23, 26, 27],
                index_question: [0, 0, 1, 0, 1, 0, 1]
            }, {
                index_answer: [2, 4, 5, 16, 17, 21, 26],
                index_question: [1, 1, 1, 1, 1, 0, 1]
            }, {
                index_answer: [5, 11, 12, 15, 22, 25, 27],
                index_question: [0, 0, 0, 0, 0, 0, 0]
            }
        ],
        QUESTIONNAIRE_3: [
            {
                index_answer: [0, 1, 2, 3, 4, 5, 6],
                index_question: [6, 0, 7, 3, 1, 5, 4]
            }, {
                index_answer: [0, 1, 2, 3, 4, 5, 6],
                index_question: [3, 1, 0, 7, 5, 2, 6]
            }, {
                index_answer: [0, 1, 2, 3, 4, 5, 6],
                index_question: [5, 4, 2, 1, 3, 6, 0]
            }, {
                index_answer: [0, 1, 2, 3, 4, 5, 6],
                index_question: [2, 6, 3, 4, 7, 0, 5]
            }, {
                index_answer: [0, 1, 2, 3, 4, 5, 6],
                index_question: [0, 2, 5, 6, 4, 7, 3]
            }, {
                index_answer: [0, 1, 2, 3, 4, 5, 6],
                index_question: [7, 3, 6, 2, 0, 4, 1]
            }, {
                index_answer: [0, 1, 2, 3, 4, 5, 6],
                index_question: [1, 5, 4, 0, 2, 1, 7]
            }, {
                index_answer: [0, 1, 2, 3, 4, 5, 6],
                index_question: [4, 7, 1, 5, 6, 3, 2]
            }
        ]
    });