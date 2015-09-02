﻿(function() {
    'use strict';
    var KEYS = angular.injector(['common.module']).get('CONSTANT_KEYS');

    angular
        .module('routes.module')
        .config(configRoutes);

    configRoutes.$inject = [KEYS.APP_ROUTES];
    function configRoutes(routes) {

        routes.push({
            name: 'home',
            url: '/home',
            controller: 'homeController as vm',
            templateUrl: '/app/views/layout/home.html',
            displayName: "Inicio",
            displayIcon: "fa-home",
            allowAnnonymous: true,
            $$permissionId: "00"
        },
        {
            name: 'homeapp',
            url: '/homeapp',
            controller: 'homeController as vm',
            templateUrl: '/app/views/layout/home-app.html',
            displayName: "Inicio App",
            displayIcon: "fa-home",
            allowAnnonymous: false,
            $$permissionId: "01"
        });
    }

})();