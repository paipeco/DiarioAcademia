﻿(function () {
    'use strict';
    angular
        .module('app.authentication')
        .config(configRoutes);


    configRoutes.$inject = ['RouteHelpersProvider', '$stateProvider'];

    function configRoutes(helper, $stateProvider) {

        $stateProvider
            .state('login', {
                url: '/login',
                controller: 'loginController as vm',
                templateUrl: 'src/common/authentication/views/login.html',
                allowAnnonymous: true,
                resolve: helper.resolveFor('app.authentication')
            })
            .state('signup', {
                url: '/signup',
                controller: 'signupController as vm',
                templateUrl: 'src/common/authentication/views/signup.html',
                resolve: helper.resolveFor('app.authentication'),
                allowAnnonymous: true
            });
    }

})();