'use strict';

angular.module('Proto').config(function ($urlRouterProvider, $stateProvider) {
    
    $urlRouterProvider
        .otherwise("/step1");

    $stateProvider
        .state ('step1', {
            url:'/step1',
            step: 1,
            templateUrl: 'views/step1.html',
            controller: 'MainCtrl'
        })
        .state ('step2', {
            url:'/step2',
            step: 2,
            templateUrl: 'views/step2.html',
            controller: 'MainCtrl'
        })
        .state ('step3', {
            url:'/step3',
            step: 3,
            templateUrl: 'views/step3.html',
            controller: 'MainCtrl'
        })
        .state ('step4', {
            url:'/step4',
            step: 4,
            templateUrl: 'views/step4.html',
            controller: 'MainCtrl'
        })
        .state ('step5', {
            url:'/step5',
            step: 5,
            templateUrl: 'views/step5.html',
            controller: 'MainCtrl'
        });

});