﻿(function (angular) {

    'use strict';

    authService.$inject = ['$http', '$q', 'localStorageService', 'logger', 'BASEURL', 'groupService', 'storageKeys'];

    angular.module('services.module')
        .service('authService', authService);

    function authService($http, $q, localStorageService, logger, serviceBase, groupService,storageKeys) {
        var self = this;

        var redirectState = "login";
        var _username = "";

        var authentication = {
            isAuth: false,
        };

        var userNameProperty = {
            get: function () {
                return _username || "User" ;
            },
            set: function (value) {
                _username = value;
            }

        };
        Object.defineProperty(authentication, "userName", userNameProperty);



        var _lastState = { name: redirectState };


        

        var authorization = {
            //used for control menus on sidebars
            isAuthorized: function(state) {
                if (!authentication.isAuth)
                    return false;
                var authorizedGroups = authorization.permissions ? authorization.permissions.indexOf(state) : -1;
                return authorizedGroups >= 0;
            },
            role: null
        };

        activate();
        function activate() {
            fillAuthData();
        }

        var saveRegistration = function(registration) {

            logOut();

            return $http.post(serviceBase + 'api/accounts/create/', registration).then(function(response) {
                return response;
            });

        };

        var login = function(loginData) {

            var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

            var deferred = $q.defer();

            var headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

            $http.post(serviceBase + 'oauth/token', data, { headers: headers }).success(function(response) {

                
                authentication.isAuth = true;
                authentication.userName = loginData.userName;
                groupService.getGroupByUsername(authentication.userName)
                    .then(function(groups) {

                        authorization.groups = groups;
                        authorization.permissions = groupService.extractPermissions(groups);
                        localStorageService.set(storageKeys.autheData, authorization);
                    });

                //criptografar isto
                localStorageService.set(storageKeys.authoData, {
                    token: response.access_token,
                    userName: loginData.userName
                });


                logger.success("Bem vindo " + authentication.userName + "! ");
                deferred.resolve(response);

            }).error(function(err, status) {

                if (!status) {
                    logger.error("Servidor Indisponível");
                } else {


                    logger.error(err.error_description);

                }
                logOut();

                deferred.reject(err);

            });

            return deferred.promise;

        };
        var logOut = function() {

            localStorageService.remove(storageKeys.authoData);
            localStorageService.remove(storageKeys.autheData);

            authentication.isAuth = false;
            authentication.userName = "";

        };

        function fillAuthData() {

            var authoData = localStorageService.get(storageKeys.authoData);
            var autheData = localStorageService.get(storageKeys.autheData);
            if (authoData) {
                authentication.isAuth = true;
                authentication.userName = authoData.userName;
            }
            if (autheData) {
                authorization.groups = autheData.groups;
                authorization.permissions = autheData.permissions;
            }
            
        };

        //used for authorize the access to view
        var checkAuthorize = function (toState) {
            if (authorization.permissions)
            return authorization.permissions.contains(toState);

        };


    self.saveRegistration = saveRegistration;
        self.login = login;
        self.logOut = logOut;
        self.fillAuthData = fillAuthData;
        self.authentication = authentication;
        self.authorization = authorization;
        self.checkAuthorize = checkAuthorize;


        var lastStateProperty = {
            get: function () {
                var value = _lastState;
                _lastState = { name: redirectState };
                return value;
            },
            set: function (value) {
                _lastState = value;
            }

        };
        Object.defineProperty(self, "lastState", lastStateProperty);



    }

})(window.angular);