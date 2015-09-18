angular.module("core.module").run(["$templateCache", function($templateCache) {$templateCache.put("./app/directives/ndd-confirm-exit/ndd-confirm-exit.html","<ndd-modal target=modalConfirmExit label={{titleModalConfirm}} callback=confirmExit>{{bodyModalConfirm}}</ndd-modal>");
$templateCache.put("./app/directives/ndd-group-checkbox/ndd-group-checkbox.html","<div class=input-group ng-repeat=\"obj in elements\" style=\"padding-bottom: 2%\"><span class=input-group-addon ng-class=\"{\'border-success\': check(obj, compare, method)}\"><input type=checkbox ng-checked=\"check(obj, compare, method)\" ng-click=\"onclick(obj, compare, chkGroup, callback, method)\" ng-model=chkGroup></span> <input type=text class=form-control value=\"{{obj.displayName || obj.name}}\" disabled ng-class=\"{\'border-success\': check(obj, compare, method), \'clear-border\': !!obj.permissionId}\"> <span class=\"input-group-addon show-permissionId\" ng-class=\"{\'border-success\': check(obj, compare, method)}\" ng-show=obj.permissionId><small>{{obj.permissionId}}</small></span></div><pager total-items=countElements ng-model=currentPage ng-hide=\"array.length == 0 || array.length <= numPerPage\"></pager>");
$templateCache.put("./app/directives/ndd-head/ndd-head.html","<div class=\"col-sm-12 clear-padding\"><img src=/app/images/icons/Icon_back.png class=icon-back ng-click=redirect(backRoute)> <span class=\"text-head text-capitalize\">{{title}}</span><hr class=separator-bottom></div>");
$templateCache.put("./app/directives/ndd-modal/ndd-modal.html","<div class=\"modal fade\" id={{target}} tabindex=-1 role=dialog aria-labelledby=myModalLabel aria-hidden=true><div class=\"modal-dialog modal-lg\" style=\"margin-top: 5%\"><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>&times;</span></button><h4 class=modal-title id=myModalLabel>{{label}}</h4></div><div class=modal-body><div ng-transclude></div></div><div class=modal-footer><button type=button class=\"btn btn-default\" data-dismiss=modal ng-hide=info>Cancelar</button> <button type=button class=\"btn btn-primary\" data-dismiss=modal ng-click=callback()>Ok</button></div></div></div></div>");
$templateCache.put("./app/directives/ndd-panel/ndd-panel.html","<div class=col-sm-3><div class=\"dashboard-div-wrapper bk-clr-three\" style=\"cursor: pointer;\"><i class=\"fa dashboard-div-icon\" ng-class=icon></i><div class=\"progress progress-striped active\"><div class=\"progress-bar progress-bar-warning\" role=progressbar aria-valuenow=80 aria-valuemin=0 aria-valuemax=100 style=\"width: 0\"></div></div><h5>{{title}}</h5></div></div>");
$templateCache.put("./app/directives/ndd-popover/ndd-popover.html","<div class=\"popover left\"><div class=arrow></div><h3 class=popover-title < h3><div class=popover-content><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p></div></h3></div>");
$templateCache.put("./app/directives/ndd-sidemenu-option/ndd-sidemenu-option.html","<li class=\"li separator-menu side-option\" ng-show=state.contains(routeShow) ng-class=\"{\'actived\': state.contains(routeActived || route)}\" ndd-security={{route}}><a class=cursor-pointer ng-click=redirect(route)><i class=\"fa align-middle icon-font\" ng-class=icon ng-show=icon></i> <span class=align-middle>{{name}}</span></a></li>");
$templateCache.put("./app/directives/ndd-table/ndd-table.html","<table class=\"table table-hover table-responsive table-condensed\"><thead><tr><th>&nbsp;</th><th ng-repeat=\"column in columns\">{{column}}</th></tr></thead><tbody><tr ng-repeat=\"entity in data | filter: dataFilter\" ng-click=\"cbClick(entity); onClick(entity);\" class=cursor-pointer ng-class=\"{\'actived-row\':selectedEntity == entity}\"><td><input type=radio name=rdGroup ng-click=\"selectedEntity == entity\" ng-checked=\"selectedEntity == entity\"></td><td ng-repeat=\"attribute in attrs\"><span ng-hide=isBool(entity[attribute])>{{entity[attribute]}}</span> <span class=\"glyphicon glyphicon-star\" ng-show=\"isBool(entity[attribute]) && entity[attribute]\"></span> <span class=\"glyphicon glyphicon-minus\" ng-show=\"isBool(entity[attribute]) && !entity[attribute]\"></span></td></tr></tbody></table>");
$templateCache.put("./app/directives/ndd-toolbar/ndd-toolbar.html","<ul class=\"nav navbar-nav toolbar\"><ndd-toolbar-option name=Propriedades icon=fa-cog ng-click=cbProperties() ng-show=cbProperties security={{securityProperties}}></ndd-toolbar-option><ndd-toolbar-option name=Novo icon=fa-plus ng-click=cbNew() route={{stateNew}} ng-show=\"cbNew || stateNew\" security={{stateNew}}></ndd-toolbar-option><ndd-toolbar-option name=Remover icon=fa-times ng-click=cbRemove() security={{securityRemove}}></ndd-toolbar-option></ul>");
$templateCache.put("./app/directives/ndd-toolbar-option/ndd-toolbar-option.html","<li class=\"li separator-menu\" ndd-security={{security}}><a class=cursor-pointer ng-click=redirect(route)><i class=\"fa icon-font\" ng-class=icon ng-show=icon></i> <span class=\"align-middle hidden-xs\">{{name}}</span></a></li>");
$templateCache.put("./app/templates/components/inner-view.html","<div ui-view class=container-fluid style=\"padding: 0 !important\"></div>");
$templateCache.put("./app/templates/layout/breadcrumb.html","<ul class=breadcrumb><li ng-repeat=\"step in steps\" ng-switch=\"$last || !!step.abstract\" ng-class=\"{active: $last}\"><i class=\"fa {{step.ncyBreadcrumb.icon}}\"></i> <a ng-switch-when=false href={{step.ncyBreadcrumbLink}}>{{step.ncyBreadcrumbLabel}}</a> <span ng-switch-when=true>{{step.ncyBreadcrumbLabel}}</span></li></ul>");
$templateCache.put("./app/templates/layout/footer.html","<footer class=text-right><i class=\"fa fa-copyright\"></i> <span>{{shell.year}} NDDigital</span></footer>");
$templateCache.put("./app/templates/layout/navbar.html","<nav class=\"navbar navbar-inverse navbar-fixed-top nav-custom\" role=navigation><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=.navbar-ex1-collapse><span class=sr-only></span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand ui-sref=home>Diário da Academia</a></div><div ng-include=\"\'app/templates/layout/top-menu.html\'\" class=hidden-xs></div><div ng-include=\"\'app/templates/layout/sidebar.html\'\"></div></nav><br><nav class=\"navbar navbar-fixed-top nav-options-custom\" role=navigation ng-show=shell.authentication.isAuth><div class=option-nav ui-sref=homeapp ng-class=\"{\'actived-option\': state.contains(\'home\')}\">INICIO</div><div class=option-nav ui-sref=turma ng-class=\"{\'actived-option\': state.contains(\'turma\')}\" ndd-security=turma>TURMAS</div><div class=option-nav ui-sref=aluno ng-class=\"{\'actived-option\': state.contains(\'aluno\')}\" ndd-security=aluno>ALUNOS</div><div class=option-nav ui-sref=aula ng-class=\"{\'actived-option\': state.contains(\'aula\')}\" ndd-security=aula>AULA</div><div class=option-nav ui-sref=chamada.create ng-class=\"{\'actived-option\': state.contains(\'chamada\')}\" ndd-security=chama>CHAMADA</div><div class=option-nav ui-sref=manager ng-class=\"{\'actived-option\': state.contains(\'manager\')}\" ndd-security=manager>GERENCIADOR</div></nav>");
$templateCache.put("./app/templates/layout/sidebar.html","<div class=\"collapse navbar-collapse navbar-ex1-collapse\" ng-controller=\"sidebarController as vm\"><ul class=\"nav navbar-nav side-nav sidemenu-custom\" ng-show=shell.authentication.isAuth ng-class=\"{\'slider-enter\': shell.authentication.isAuth, \'slider-leave\': !shell.authentication.isAuth }\"><ndd-sidemenu-option route-show=home name=Inicio icon=fa-home class=home-li route=homeapp state={{state}}></ndd-sidemenu-option><div class=seta-direita ng-show=\"state.contains(\'home\')\"></div><ndd-sidemenu-option route-show=turma name=\"Listar Turmas\" icon=fa-bars route=turma.list state={{state}}></ndd-sidemenu-option><div class=seta-direita ng-show=\"state.contains(\'turma.list\')\"></div><ndd-sidemenu-option route-show=turma name=\"Nova Turma\" icon=fa-plus route=turma.create state={{state}}></ndd-sidemenu-option><div class=seta-direita ng-show=\"state.contains(\'turma.create\')\"></div><ndd-sidemenu-option route-show=aluno name=\"Listar Alunos\" icon=fa-bars route=aluno.list state={{state}}></ndd-sidemenu-option><div class=seta-direita ng-show=\"state.contains(\'aluno.list\')\"></div><ndd-sidemenu-option route-show=aluno name=\"Novo Aluno\" icon=fa-plus route=aluno.create state={{state}}></ndd-sidemenu-option><div class=seta-direita ng-show=\"state.contains(\'aluno.create\')\"></div><ndd-sidemenu-option route-show=aula name=\"Lista de Aula\" icon=fa-bars route=aula.list state={{state}}></ndd-sidemenu-option><div class=seta-direita ng-show=\"state.contains(\'aula.list\')\"></div><ndd-sidemenu-option route-show=chamada name=\"Realizar Chamada\" icon=fa-bars route=chamada.create state={{state}}></ndd-sidemenu-option><div class=seta-direita ng-show=\"state.contains(\'chamada.create\')\"></div><ndd-sidemenu-option route-show=manager name=Usuários route-actived=manager.user route=manager.user.list state={{state}} icon=fa-user></ndd-sidemenu-option><div class=seta-direita ng-show=\"state.contains(\'manager.user\')\"></div><ndd-sidemenu-option route-show=manager name=Grupos route-actived=manager.group route=manager.group.list state={{state}} icon=fa-users></ndd-sidemenu-option><div class=seta-direita ng-show=\"state.contains(\'manager.group\')\"></div><ndd-sidemenu-option route-show=manager name=Permissões route=manager.permissions state={{state}} icon=fa-copy></ndd-sidemenu-option><div class=seta-direita ng-show=\"state.contains(\'manager.permissions\')\"></div><li class=\"li separator-menu\" style=\"height: calc(100%); pointer-events: none\"><a href=javascript:; style=\"height: 100%;\"></a></li></ul></div>");
$templateCache.put("./app/templates/layout/toolbar.html","");
$templateCache.put("./app/templates/layout/top-menu.html","<ul class=\"nav navbar-right top-nav\" ng-show=shell.authentication.isAuth><li class=dropdown><i class=\"fa fa-2x fa-question help\"></i></li></ul><ul class=\"nav navbar-right top-nav\" ng-show=shell.authentication.isAuth><li class=dropdown><a data-toggle=dropdown class=dropdown-toggle style=\"cursor: pointer; color:white\"><span class=profile-ava><i class=\"fa fa-2x fa-user\"></i></span> <span class=menu-log><span class=username>{{shell.authentication.userName || \'User\'}}</span> <b class=caret></b></span></a><ul class=dropdown-menu><li ng-hide=shell.authentication.isAuth><a ui-sref=login href=#><i class=\"fa fa-fw fa-sign-in\"></i> Entrar</a></li><li ng-hide=shell.authentication.isAuth><a ui-sref=signup class=text>Registrar-se</a></li><li data-ng-show=shell.authentication.isAuth><a href class=text ng-click=shell.logOut()><i class=\"fa fa-fw fa-sign-out\"></i>Sair</a></li><li class=divider></li></ul></li></ul>");
$templateCache.put("./app/views/aluno/aluno-create.html","<div class=col-sm-11><ndd-head title={{vm.title}}></ndd-head><div class=\"col-sm-12 clear-padding\"><form name=vm.alunoForm class=jumbotron><input class=form-control type=text ng-model=vm.aluno.nome name=nome placeholder=Nome ng-required=true ng-minlength=10><br><input class=form-control type=text ng-model=vm.aluno.endereco.cep name=cep placeholder=CEP ng-required=true ng-minlength=8><br><input class=form-control type=text ng-model=vm.aluno.endereco.bairro name=bairro placeholder=Bairro ng-required=true><br><input class=form-control type=text ng-model=vm.aluno.endereco.localidade name=localidade placeholder=Localidade ng-required=true><br><input class=form-control type=text ng-model=vm.aluno.endereco.uf name=uf placeholder=UF ng-required=true><br><input class=form-control type=text ng-model=vm.aluno.turma name=turma ng-hide=true ng-required=true><select class=form-control ng-model=vm.aluno.turma ng-options=\"turma.descricao for turma in vm.turmas\"><option>Selecione a Turma</option></select><br><div ng-show=\"vm.alunoForm.nome.$error.required && vm.alunoForm.nome.$dirty\" class=\"alert alert-danger\">Por favor, preencha o campo nome!</div><div ng-show=\"vm.alunoForm.nome.$error.minlength && vm.alunoForm.nome.$dirty\" class=\"alert alert-danger\">O campo nome deve ter mais de 10 caractéres!</div><div ng-show=\"vm.alunoForm.turma.$error.required && vm.alunoForm.uf.$dirty\" class=\"alert alert-danger\">Selecione uma turma válida!</div><button class=\"btn btn-primary\" ng-click=vm.save() ng-disabled=vm.alunoForm.$invalid>Salvar</button> <button class=\"btn btn-success\" ng-click=vm.clearFields()>Limpar</button></form></div></div>");
$templateCache.put("./app/views/aluno/aluno-details.html","<div class=col-sm-11><ndd-head title={{vm.title}}></ndd-head><div class=\"col-sm-12 clear-padding\"><form name=vm.alunoForm class=jumbotron><input class=form-control type=text ng-model=vm.aluno.nome name=nome placeholder=Nome ng-required=true ng-minlength=10><br><input class=form-control type=text ng-model=vm.aluno.endereco.cep name=cep placeholder=CEP ng-required=true ng-minlength=8><br><input class=form-control type=text ng-model=vm.aluno.endereco.bairro name=bairro placeholder=Bairro ng-required=true><br><input class=form-control type=text ng-model=vm.aluno.endereco.localidade name=localidade placeholder=Localidade ng-required=true><br><input class=form-control type=text ng-model=vm.aluno.endereco.uf name=uf placeholder=UF ng-required=true><br><select class=form-control ng-model=vm.aluno.turma ng-options=\"turma.descricao for turma in vm.turmas\"><option value>Selecione a Turma</option></select><br><div ng-show=\"vm.alunoForm.nome.$error.required && vm.alunoForm.nome.$dirty\" class=\"alert alert-danger\">Por favor, preencha o campo nome!</div><div ng-show=\"vm.alunoForm.nome.$error.minlength && vm.alunoForm.nome.$dirty\" class=\"alert alert-danger\">O campo nome deve ter mais de 10 caractéres!</div><div ng-show=\"vm.alunoForm.turma.$error.selected && vm.alunoForm.nome.$dirty\" class=\"alert alert-danger\">Selecione uma turma válida!</div><button class=\"btn btn-primary\" ng-click=vm.save() ng-disabled=vm.alunoForm.$invalid>Salvar</button> <button class=\"btn btn-success\" ng-click=vm.clearFields()>Limpar</button></form></div></div>");
$templateCache.put("./app/views/aluno/aluno-list.html","<div class=\"col-sm-11 clear-padding\"><ndd-head title={{vm.title}} back-route=aluno></ndd-head><div class=\"col-sm-12 clear-padding\"><div class=submit-line><input type=text class=form-control placeholder=Pesquisar ng-model=nameFilter> <button class=submit-lente type=submit><i class=\"fa fa-search\"></i></button><br></div></div><ndd-table columns=\"[\'ALUNOS\', \'PRESENÇAS\', \'FALTAS\']\" attrs=\"[\'nome\', \'presenças\', \'faltas\']\" data=vm.alunos cb-click=vm.onClick ng-model=nameFilter></ndd-table></div><ndd-toolbar cb-properties=vm.edit security-properties=aluno.details cb-remove=vm.remove security-remove=action.deleteAluno></ndd-toolbar>");
$templateCache.put("./app/views/aula/aula-create.html","<div class=col-sm-11><ndd-head title=Aulas></ndd-head><div class=\"col-lg-offset-1 col-lg-10\"><div class=jumbotron><form name=vm.aulaForm class=jumbotron><input class=form-control type=date ng-model=vm.aula.data name=data ng-required=true ng-minlength=10><br><input class=form-control type=text ng-model=vm.aula.turma name=turma ng-hide=true ng-required=true><br><select class=form-control ng-model=vm.aula.turma ng-options=\"turma.descricao for turma in vm.turmas\"><option value>Selecione a Turma</option></select><br><button class=\"btn btn-primary\" ng-click=vm.save() ng-disabled=vm.aulaForm.$invalid>Salvar</button> <button class=\"btn btn-success\" ng-click=vm.clearFields()>Limpar</button></form></div></div></div>");
$templateCache.put("./app/views/aula/aula-list.html","<div class=\"col-sm-11 clear-padding\"><ndd-head title=Aulas back-route=aula></ndd-head><div class=col-lg-12><div class=jumbotron><div><input class=form-control type=text ng-model=vm.criterioDeBusca placeholder=\"O que você está procurando?\"><table class=table><tr><th></th><th>Data da aula</th></tr><tr ng-class ng-repeat=\"aula in vm.aulas | filter: vm.criterioDeBusca\"><td><input type=radio name=rdAula ng-click=\"vm.aulaSelecionada = aula\"></td><td>{{aula.dataAula | date: \'dd/MM/yyyy\'}}</td></tr></table></div></div></div></div><ndd-toolbar state-new=aula.create cb-remove=vm.delete></ndd-toolbar>");
$templateCache.put("./app/views/authentication/login.html","<div class=\"col-sm-12 clear-padding\"><div class=container-user><div class=row><h1 class=page-header>Entrar</h1><div ncy-breadcrumb></div></div><br></div></div><div class=\"col-sm-offset-4 col-sm-4 col-xs-offset-2 col-xs-8 login\"><div class=\"card card-container\"><img id=profile-img class=profile-img-card src=/app/images/avatar_login.png><p id=profile-name class=profile-name-card></p><form class=form-signin name=login><span class=reauth-email></span> <input type=text name=inputEmail class=form-control placeholder=Username required autofocus ng-model=vm.loginData.userName> <input type=password name=inputPassword class=form-control placeholder=Password required ng-model=vm.loginData.password> <span class=pull-right style=font-size:small;><a href ui-sref=signup>Não tem um conta ? Registre -se</a></span><br><button class=\"btn btn-lg btn-info btn-block btn-signin\" type=submit ng-click=\"login.$valid ? vm.login(): false\">Entrar</button><br><div ng-hide=\"vm.message == \'\'\" class=\"alert alert-danger\">{{vm.message}}</div></form></div></div>");
$templateCache.put("./app/views/authentication/signup.html","<div class=\"col-sm-12 clear-padding\"><div class=container-user><div class=row><h1 class=page-header>Cadastro</h1><div ncy-breadcrumb></div></div><br></div></div><div class=\"col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6\"><div class=\"jumbotron class1\" style=\"padding-top: 5px;\"><img id=profile-img class=profile-img-card src=/app/images/avatar_plus.gif><form name=vm.aulaForm class=jumbotron style=\"padding-top: 0; padding-bottom: 0; margin-bottom: 3%\"><input type=text class=form-control placeholder=\"First Name\" data-ng-model=vm.registration.firstName required autofocus><br><input type=text class=form-control placeholder=\"Last Name\" data-ng-model=vm.registration.lastName required><br><input type=text class=form-control placeholder=Username data-ng-model=vm.registration.userName required><br><input type=email class=form-control placeholder=Email data-ng-model=vm.registration.email required><br><input type=password class=form-control placeholder=Password data-ng-model=vm.registration.password required><br><input type=password class=form-control placeholder=\"Confirm Password\" data-ng-model=vm.registration.confirmPassword required><br><button class=\"btn btn-lg btn-info btn-block\" type=submit data-ng-click=vm.signUp()>Registrar-se</button><div data-ng-hide=\"vm.message == \'\'\" data-ng-class=\"(vm.savedSuccessfully) ? \'alert alert-success\' : \'alert alert-danger\'\">{{vm.message}}</div></form></div></div>");
$templateCache.put("./app/views/chamada/chamada.html","<div class=\"col-sm-11 clear-padding\"><ndd-head title=Chamada back-route=chamada></ndd-head><div class=col-lg-12><form name=vm.chamadaForm class=jumbotron><select class=form-control ng-model=vm.chamada.turma ng-options=\"turma.descricao for turma in vm.turmas\" ng-click=vm.populateAulas(vm.chamada.turma) ng-disabled=!vm.turmas[0] ng-required=true ng-selected=\"vm.selected == true\"><option>Selecione a Turma</option></select><br><select class=form-control ng-model=vm.chamada.aula ng-options=\"aula.dataAula | date: \'dd/MM/yyyy\' for aula in vm.aulas\" ng-disabled=!vm.aulas[0] ng-click=vm.getChamada() ng-required=true><option>Selecione a aula de hoje</option></select><br><div ng-show=\"vm.chamadaForm.aula.$error.required && vm.chamadaForm.aula.$dirty\" class=\"alert alert-danger\">Por favor, selecione aula de hoje!</div><div ng-show=\"vm.turmaSelected && vm.aulas.length == 0\" class=\"alert alert-danger\">Essa turma não possui aulas cadastradas!</div><div ng-show=\"vm.turmaSelected && vm.aulaSelected && vm.alunos.length == 0\" class=\"alert alert-danger\">Essa turma não possui alunos cadastrados!</div><table class=table><tr><th>Presença</th><th>Alunos</th></tr><tr ng-repeat=\"aluno in vm.alunos\"><td><div class=switcher ng-class=\"{\'on\': aluno.status}\" ng-click=\"aluno.status = !aluno.status\"><div class=switcherHandler></div><input type=checkbox class=switcherInput ng-model=aluno.status></div></td><td><h4>{{aluno.nome}}</h4></td></tr></table><button class=\"btn btn-success\" ng-click=vm.save() ng-disabled=vm.chamadaForm.$invalid>Chamada Realizada!</button></form></div></div>");
$templateCache.put("./app/views/layout/home-app.html","<div class=\"row container-user\"><div class=col-sm-12><h1>Diário</h1><h4><em>Academia do Programador</em></h4><hr><div ncy-breadcrumb></div><br></div><div ng-class=\"{\'col-xs-offset-1 col-xs-10\': !shell.authentication.isAuth}\"><div class=col-sm-12><div class=col-sm-12><ndd-panel title=Alunos icon=fa-users ui-sref=aluno.list></ndd-panel><ndd-panel title=Turmas icon=fa-university ui-sref=turma.list></ndd-panel><ndd-panel title=Aulas icon=fa-calendar ui-sref=aula.list></ndd-panel><ndd-panel title=Chamada icon=fa-check ui-sref=chamada.create></ndd-panel></div></div><div class=col-sm-12><hr><div class=\"panel panel-default\"><div class=panel-heading><strong>Objetivo</strong></div><div class=panel-body><div class=\"alert alert-info\">É um curso que forma desenvolvedores para a empresa NDDigital. Anualmente a empresa garimpa talentos tanto para área de desenvolvimento como para outros setores da empresa.</div></div></div></div></div></div>");
$templateCache.put("./app/views/layout/home.html","<div class=container-home><carousel interval=5500 no-wrap=false class=custom-carousel><div class=header-carousel><h1>Academia do Programador</h1><br><h3 class=hidden-xs>Curso que forma desenvolvedores para a NDDigital. Anualmente a empresa garimpa talentos tanto para área de desenvolvimento como para outros setores da empresa.</h3><button class=\"btn btn-info btn-header\" ui-sref=signup>Cadastre-se</button> <button class=\"btn btn-primary btn-header\" ui-sref=login>Login</button></div><slide ng-repeat=\"slide in vm.slides\" class=slide><img ng-src={{slide}}></slide></carousel></div>");
$templateCache.put("./app/views/manager/manager-user.html","<div class=container-user><div class=row><h1 class=page-header>{{vm.title}}</h1><ol class=breadcrumb><li><i class=\"fa fa-home\"></i> <a ui-sref=home>Inicio</a></li><li><i class=\"fa fa-wrench\"></i> <a style=\"cursor: pointer\">Gerenciador</a></li><li class=active><i class=\"fa fa-users\"></i> <a ui-sref=manager.user>Usuario</a></li></ol></div><br><div class=row><div class=col-md-5 style=\"padding-left: 0\"><div class=input-group><div class=input-group-btn><button disabled type=button class=\"btn btn-default\" style=cursor:default;><i class=\"fa fa-search\"></i></button></div><input type=text class=\"form-control ng-pristine ng-valid ng-touched\" ng-model=nameFilter aria-label></div><div class=col-md-7>&nbsp;</div></div></div><br><div class=row><table class=\"table table-hover table-responsive table-condensed\"><thead><tr><th>Usuario</th><th>Login</th><th>Email</th><th>Level</th><th>Data de Inscrição</th><th>&nbsp;</th><th>&nbsp;</th></tr></thead><tbody><tr ng-repeat=\"user in vm.users | filter: nameFilter\"><td>{{user.fullName}}</td><td>{{user.userName}}</td><td>{{user.email}}</td><td>{{user.level}}</td><td>{{user.joinDate | date:\'dd/MM/yyyy\'}}</td><td class=text-right><button class=\"btn btn-info\" ng-click=vm.edit(user)><i class=\"fa fa-pencil-square-o\"></i></button></td><td><button class=\"btn btn-danger\" ng-click=vm.modal(user) data-toggle=modal data-target=#modelRemoveUser><i class=\"fa fa-trash-o\"></i></button></td></tr></tbody></table><pagination ng-model=vm.currentPage total-items=vm.countUsers max-size=vm.maxSize boundary-links=true></pagination></div></div><ndd-modal target=modelRemoveUser label={{vm.titleModelRemove}} callback=vm.remove>{{vm.bodyModelRemove}}</ndd-modal>");
$templateCache.put("./app/views/turma/turma-create.html","<div class=\"col-sm-11 clear-padding\"><ndd-head title={{vm.title}} back-route=turma></ndd-head><div class=\"col-sm-12 clear-padding\"><form name=vm.turmaForm class=jumbotron><input class=form-control type=text value=\"Academia do Programador\" name=descricao ng-required=true ng-disabled=true><br><input class=form-control type=number value=2000 ng-model=vm.turma.ano name=ano ng-required=true ng-minlength=4 ng-maxlength=4><br><div ng-show=\"vm.turmaForm.ano.$error.required && vm.turmaForm.ano.$dirty\" class=\"alert alert-danger\">Por favor, preencha o campo ano com 4 números! (ex:2000)</div><button class=\"btn btn-primary\" ng-click=vm.save() ng-disabled=vm.turmaForm.$invalid>Salvar</button> <button class=\"btn btn-success\" ng-click=vm.clearFields() ng-disabled=!vm.turmaForm.ano.$dirty>Limpar</button></form></div></div>");
$templateCache.put("./app/views/turma/turma-details.html","<div class=col-sm-11><ndd-head title={{vm.title}}></ndd-head><div class=col-sm-12><form name=vm.turmaForm class=jumbotron><input class=form-control type=text value=\"Academia do Programador\" name=descricao ng-required=true ng-disabled=true><br><input class=form-control type=number value=2000 ng-model=vm.turma.ano name=ano ng-required=true ng-disabled=false><br><div ng-show=\"vm.turmaForm.ano.$error.required && vm.turmaForm.ano.$dirty\" class=\"alert alert-danger\">Por favor, preencha o campo ano!</div><div ng-show=\"vm.turmaForm.ano.minlength && vm.alunoForm.ano.$error.$dirty\" class=\"alert alert-danger\">O campo ano deve ter 4 digitos!</div><button class=\"btn btn-primary\" ng-click=vm.save() ng-disabled=vm.turmaForm.$invalid>Salvar</button> <button class=\"btn btn-success\" ng-click=vm.clearFields()>Limpar</button></form></div></div>");
$templateCache.put("./app/views/turma/turma-list.html","<div class=\"col-sm-11 clear-padding\"><ndd-head title={{vm.title}}></ndd-head><div class=\"col-sm-12 clear-padding\"><div class=submit-line><input type=text class=form-control placeholder=Pesquisar ng-model=nameFilter> <button class=submit-lente type=submit><i class=\"fa fa-search\"></i></button><br></div></div><ndd-table columns=\"[\'TURMA\']\" attrs=\"[\'descricao\']\" data=vm.turmas cb-click=vm.onClick ng-model=nameFilter></ndd-table></div><ndd-toolbar cb-properties=vm.edit security-properties=turma.details cb-remove=vm.remove security-remove=action.deleteTurma></ndd-toolbar>");
$templateCache.put("./app/views/manager/group/manager-group-create.html","");
$templateCache.put("./app/views/manager/group/manager-group-edit.html","<ndd-head title={{vm.name}} back-route=manager.group.list></ndd-head><div class=\"col-sm-11 clear-padding\"><br><form><label>Grupo</label> <input type=text class=form-control ng-model=vm.group.name ng-change=\"vm.hasChange = true\"><br><label>Adminstrador:</label> <button type=button class=btn aria-label=isAdmin ng-class=\"{\'btn-warning\': vm.group.isAdmin}\" ng-click=vm.setAdmin() data-toggle=tooltip data-placement=top title data-original-title={{teste}}><span class=\"glyphicon glyphicon-star\"></span> {{teste = vm.group.isAdmin ? \'É administrador\' : \'Não é Administrador\'}}</button><br><br><label>Permissões:</label> <button class=\"btn btn-default\" ng-click=vm.editPermission() ng-disabled=vm.group.isAdmin>Gerenciar Permissões</button> <span class=msgAllPermission ng-show=vm.group.isAdmin><i class=\"fa fa-star\"></i> Possui todas as permissões</span></form><hr><div class=\"text-center col-sm-12 clear-padding\"><button class=\"btn btn-success\" ng-click=vm.modal(vm.save) data-toggle=modal data-target=#modalGroup><i class=\"fa fa-save\"></i></button> <button class=\"btn btn-danger\" ng-click=vm.modal(vm.remove) data-toggle=modal data-target=#modalGroup ng-disabled=!vm.group><i class=\"fa fa-times\"></i></button></div><br></div><ndd-modal target=modalGroup label={{vm.titleModal}} callback=vm.callback>{{vm.bodyModal}}</ndd-modal><ndd-confirm-exit controller=vm><ndd-confirm-exit></ndd-confirm-exit></ndd-confirm-exit>");
$templateCache.put("./app/views/manager/group/manager-group-list.html","<div class=\"col-sm-11 clear-padding\"><ndd-head title=Grupos back-route=manager></ndd-head><div class=\"col-sm-12 clear-padding text-indicator container-header\"><span ui-sref=manager.user.list>USUÁRIOS</span> <span class=text-indicator-actived>GRUPOS</span></div><div class=\"col-sm-12 clear-padding\"><div class=submit-line><input type=text class=form-control placeholder=Pesquisar ng-model=nameFilter> <button class=submit-lente type=submit><i class=\"fa fa-search\"></i></button><br></div></div><ndd-table columns=\"[\'NOME\', \'ADMINISTRADOR\']\" attrs=\"[\'name\', \'isAdmin\']\" data=vm.groups cb-click=vm.onClick ng-model=nameFilter></ndd-table></div><ndd-toolbar cb-properties=vm.edit security-properties=manager.group.edit state-new=manager.group.create cb-remove=vm.cbRemove></ndd-toolbar><ndd-modal target=modelRemoveUser label={{vm.titleModelRemove}} callback=vm.remove>{{vm.bodyModelRemove}}</ndd-modal>");
$templateCache.put("./app/views/manager/group/manager-group-permission-edit.html","<div class=\"container-user fadeIn enter-fadeIn\"><ndd-head title=\"Permissões de {{vm.group.name}}\"></ndd-head></div><hr style=\"margin-top: 2%\"><div class=\"container-user fadeIn enter-fadeIn\" ng-class=\"{\'disabled\': vm.group.isAdmin}\"><div class=row><div class=\"col-sm-offset-3 col-sm-6 clear-padding\"><ndd-group-checkbox array=vm.permissions compare=vm.group.permissions method=vm.comparePermissions callback=vm.onchange></ndd-group-checkbox></div></div><div class=row><div class=\"col-xs-12 text-center clear-padding\"><h3 ng-hide=\"vm.permissions && vm.permissions.length > 0\">Não há permissões cadastradas.</h3></div></div><div class=row><div class=\"col-xs-12 text-center clear-padding\"><hr><button class=\"btn btn-default pull-left\" ng-click=vm.redirect() style=margin-left:1%;><i class=\"fa fa-chevron-circle-left\" style=\"font-size: large\"></i></button> <button class=\"btn btn-info\" ng-click=vm.modal() data-toggle=modal data-target=#modalEditGroup ng-disabled=!vm.hasChange><i class=\"fa fa-save\"></i></button></div></div></div><ndd-modal target=modalEditGroup label={{vm.titleModalEdit}} callback=vm.saveChanges>{{vm.bodyModalEdit}}</ndd-modal><ndd-confirm-exit controller=vm><ndd-confirm-exit></ndd-confirm-exit></ndd-confirm-exit>");
$templateCache.put("./app/views/manager/permission/manager-permission.html","<ndd-head title=Permissões></ndd-head><div class=container-user><div class=\"row clear-padding\"><button class=\"btn btn-danger\" ng-click=vm.modifyAll(false) ng-disabled=\"vm.showRoutes.length <= 0\"><i class=\"fa fa-minus-square-o\"></i> <span>Limpar Todos</span></button> <button class=\"btn btn-info\" ng-click=vm.modifyAll(true) ng-disabled=\"vm.showRoutes.length == vm.allPermissions.length\"><i class=\"fa fa-check-square-o\"></i> <span>Selecionar Todos</span></button> <button class=\"btn btn-success pull-right space-left\" ng-disabled=!vm.hasChange ng-click=vm.saveChanges()><i class=\"fa fa-save\"></i> <span>Salvar</span></button><hr></div><br><div class=row><div class=\"col-sm-4 clear-padding col-grid\" ng-repeat=\"filter in vm.filters\" ng-show=vm.permission[filter].length><div class=\"panel panel-primary text-center panel-fixed\" ng-class=\"{\'panel-success\': vm.verifyPanelSuccess(filter)}\"><div class=panel-heading><input type=checkbox class=pull-left ng-model=isAll ng-click=\"vm.modifyGroupPermissions(isAll, filter)\" ng-checked=vm.verifyPanelSuccess(filter)> <b class=text-capitalize>{{filter}}</b></div><div class=panel-body><ndd-group-checkbox array=vm.permission[filter] compare=vm.showRoutes method=vm.compareState callback=vm.onchange></ndd-group-checkbox></div></div></div></div></div><ndd-confirm-exit controller=vm><ndd-confirm-exit></ndd-confirm-exit></ndd-confirm-exit>");
$templateCache.put("./app/views/manager/user/manager-user-edit-group.html","<div class=\"fadeIn enter-fadeIn text-capitalize\"><ndd-head title=\"Grupos: {{vm.user.firstName + \' \' + vm.user.lastName }}\" back-route=manger.user.list></ndd-head></div><hr style=\"margin-top: 2%\"><div class=\"container-user fadeIn enter-fadeIn\"><div class=row><h3 ng-show=\"vm.groups.length <= 0\" class=text-center>Não há grupos cadastrados</h3><div class=\"col-sm-offset-3 col-sm-6 clear-padding\"><ndd-group-checkbox array=vm.groups compare=vm.user.groups callback=vm.onchange></ndd-group-checkbox></div></div><div class=row><div class=\"col-xs-12 text-center clear-padding\"><hr><button class=\"btn btn-info pull-left\" ui-sref=\"manager.user.edit({userId: vm.user.id})\" style=\"margin-left: 2%;\"><i class=\"fa fa-chevron-circle-left\" style=\"font-size: large\"></i> <span>Voltar</span></button> <button class=\"btn btn-success\" ng-click=vm.modal() data-toggle=modal data-target=#modelEditUser ng-disabled=!vm.hasChange><i class=\"fa fa-save\"></i> <span>Salvar</span></button></div></div></div><ndd-modal target=modelEditUser label={{vm.titleModelEdit}} callback=vm.saveChanges>{{vm.bodyModelEdit}}</ndd-modal><ndd-confirm-exit controller=vm><ndd-confirm-exit></ndd-confirm-exit></ndd-confirm-exit>");
$templateCache.put("./app/views/manager/user/manager-user-edit.html","<ndd-head title=\"Edição de Usuário\"></ndd-head><div class=\"row container-user\"><br><div class=\"col-sm-6 clear-padding\" style=\"padding-right: 2%;\"><div class=\"col-xs-12 clear-padding\"><h3 style=\"margin-top: 0;\">Perfil</h3><hr style=\"margin-top: 2%\"></div><form name=vm.formUser><div class=\"col-xs-12 clear-padding space-bottom\"><div class=\"col-xs-6 clear-padding\"><label for=name>Nome</label> <input type=text ng-model=vm.user.firstName class=form-control id=name></div><div class=\"col-xs-6 clear-padding\"><label for=lastname>Sobrenome</label> <input type=text ng-model=vm.user.lastName class=form-control id=lastname></div></div><div class=\"col-xs-12 clear-padding space-bottom\"><label for=username>Username</label> <input type=text ng-model=vm.user.userName class=form-control id=username></div><div class=\"col-xs-12 clear-padding space-bottom\"><label for=email>Email</label> <input type=text ng-model=vm.user.email class=form-control id=email></div></form></div><div class=col-sm-6 style=\"padding-left: 3%;\"><div class=\"col-xs-12 clear-padding\"><h3 style=\"margin-top: 0;\">Configurações</h3><hr style=\"margin-top: 2%\"></div><label for=groups>Grupos:</label> <button class=\"btn btn-info\" ng-click=vm.editGroups()><i class=\"fa fa-users\"></i> <span>Editar Grupos</span></button></div></div><div class=row><div class=\"col-sm-12 clear-padding text-center\"><div class=footer><hr><button class=\"btn btn-info pull-left\" ui-sref=manager.user.list style=\"margin-left: 2%;\"><i class=\"fa fa-chevron-circle-left\" style=\"font-size: large\"></i> <span>Voltar</span></button> <button class=\"btn btn-success\" data-toggle=modal data-target=#modelEditUser ng-disabled=vm.formUser.$pristine><i class=\"fa fa-check-square-o\"></i> <span>Salvar Alterações</span></button> <button class=\"btn btn-warning\" ng-click=vm.clear()><i class=\"fa fa-history\"></i> <span>Desfazer Alterações</span></button></div></div></div><ndd-modal target=modelEditUser label={{vm.titleModelEdit}} callback=vm.editUser>{{vm.bodyModelEdit}}</ndd-modal>");
$templateCache.put("./app/views/manager/user/manager-user-list.html","<div class=\"col-sm-11 clear-padding\"><div class=\"col-sm-12 clear-padding text-indicator container-header\"><span class=text-indicator-actived>USUÁRIOS</span> <span ui-sref=manager.group.list>GRUPOS</span><div class=\"submit-line pull-right\"><input type=text class=form-control placeholder=Pesquisar ng-model=nameFilter> <button class=submit-lente type=submit><i class=\"fa fa-search\"></i></button></div><hr class=separator-head></div><ndd-table columns=\"[\'NOME\', \'LOGON\', \'E-MAIL\']\" attrs=\"[\'fullName\', \'userName\', \'email\']\" data=vm.users cb-click=vm.onClick ng-model=nameFilter></ndd-table><pagination ng-model=vm.currentPage total-items=vm.countUsers max-size=vm.maxSize boundary-links=true></pagination></div><ndd-toolbar cb-properties=vm.edit security-properties=manager.user.edit cb-remove=vm.cbRemove></ndd-toolbar><ndd-modal target=modelRemoveUser label={{vm.titleModelRemove}} callback=vm.remove>{{vm.bodyModelRemove}}</ndd-modal>");}]);