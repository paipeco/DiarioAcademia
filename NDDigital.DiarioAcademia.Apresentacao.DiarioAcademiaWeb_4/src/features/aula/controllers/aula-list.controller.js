﻿/* @ngInject */
module.exports = function aulaListController(aulaService, $translate, SweetAlert) {
    var vm = this;
    vm.criterioDeBusca = "";
    vm.remove = remove;

    //script load
    activate();
    function activate() {
        makeRequest();
    }

    return vm;

    //public method
    function remove(aula) {
        if (!aula)
            return;

        vm.aula = aula;

        SweetAlert.swal({
            title: $translate.instant('confirm.CONFIRM_DELETE'),
            text: $translate.instant('confirm.CONFIRM_DELETE_LESSON', { lessonDate: new Date(vm.aula.dataAula).toLocaleDateString('pt-BR') }),
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: $translate.instant('action.OK').toUpperCase(),
            cancelButtonText: $translate.instant('action.CANCEL').toUpperCase(),
            closeOnConfirm: false,
            closeOnCancel: false
        }, actionRemove);

    }

    //private methods
    function makeRequest() {
        aulaService.getAulas().then(function (data) {
            vm.aulas = data;
        });
    };

    function actionRemove(isConfirm) {
        if (!isConfirm) {
            SweetAlert.swal($translate.instant('status.ACTION_CANCELED'),
                            $translate.instant('info.LESSON_NOT_DELETED'), 'error');
            return;
        }
        aulaService.delete(vm.aula).then(function () {
            makeRequest();
            SweetAlert.swal($translate.instant('status.SUCCESS'),
                            $translate.instant('info.LESSON_DELETED'), "success");
        });
    }
}