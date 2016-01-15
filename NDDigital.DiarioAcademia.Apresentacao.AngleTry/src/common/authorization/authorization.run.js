﻿(function () {
    'use strict';

    angular.module('app.authorization')
                .run(runStateChangeStart);


    runStateChangeStart.$inject = ['$rootScope', '$state', 'autheService', 'authoFactory', 'logger', 'authoUtilFactory', '$translate'];
    function runStateChangeStart($rootScope, $state, autheService, authoFactory, logger, authoUtilFactory, $translate) {
        $rootScope.$on('$stateChangeStart',
           function (event, toState, toParams, fromState, fromParams) {

               if (autheService.authentication.isAuth && toState.name == 'login') {
                   event.preventDefault();
                   return $state.go('app.home');
               }

               if (!autheService.authentication.isAuth && toState.name == 'app.home') {
                   event.preventDefault();
                   return $state.go('login');
               }

               //check authorization
               if (toState.allowAnnonymous || !toState.authorization)
                   return true;
               if (authoFactory.authorization.isAdmin)
                   return true;
               var isAuthorized = authoFactory.authorization.isAuthorized(toState.authorization);
               if (isAuthorized) return;
               logNoAuthorized(authoUtilFactory, $translate, logger, toState);
               event.preventDefault();
               $state.go('login');
           });
    }


    // Helpers
    function logNoAuthorized(authoUtilFactory, $translate, logger, toState) {
        var permissionRequired = authoUtilFactory.getByName(toState.authorization || toState.to);
        logger.warning($translate.instant('status.NOT_AUTHORIZED', {
            resourceName: " \"" + $translate.instant(permissionRequired.displayName) + "\""
        }));
    }

})();

