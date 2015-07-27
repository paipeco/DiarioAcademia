﻿(function (angular) {

    managerUserListController.$inject = ['$scope', 'userService', '$state'];

    angular
        .module('controllers.module')
        .controller('managerUserListController', managerUserListController);


    function managerUserListController($scope, managerService, $state) {
        var vm = this;
        var users = [];
        vm.title = 'Usuários';
   
        //angular pagination
        vm.currentPage = 1
        vm.numPerPage = 10
        vm.maxSize = 4;
        vm.countUsers = 0;

        //public methods
        vm.edit = edit;
        vm.remove = remove;
        vm.modal = modal;


        activate();
        function activate() {
            managerService.getUsers().then(function (results) {
                users = results.data;
                vm.countUsers = users.length;

                $scope.$watch("vm.currentPage + vm.numPerPage", function () {
                    var begin = ((vm.currentPage - 1) * vm.numPerPage)
                    , end = begin + vm.numPerPage;
                    vm.users = users.slice(begin, end);
                });
            });
        }

        function edit(user) {
            $state.go('manager.useredit', { userId: user.id });
        }

        function remove(user) {
            managerService.delete(user).then(function (results) {
                users.remove(user);
                vm.users.remove(user);
            });
        }

        function modal(user) {
            vm.titleModelRemove = 'Exclusão';
            vm.bodyModelRemove = 'Remover ' + user.fullName + ' (' + user.userName + ') ?'
        }
        
    }
})(window.angular);