﻿using Microsoft.VisualStudio.TestTools.UnitTesting;
using NDDigital.DiarioAcademia.Aplicacao.Services;
using NDDigital.DiarioAcademia.Dominio.Entities.Security;
using NDDigital.DiarioAcademia.Infraestrutura.Orm.Common;
using NDDigital.DiarioAcademia.Infraestrutura.Orm.Security;
using NDDigital.DiarioAcademia.IntegrationTests.Base;
using NDDigital.DiarioAcademia.IntegrationTests.Common;
using NDDigital.DiarioAcademia.SecurityTests;
using System.Data.Entity;

namespace NDDigital.DiarioAcademia.IntegrationTests.Security
{
    [TestClass]
    public class GroupRepositoryTest
    {
        public IGroupRepository _repoGroup;
        public IPermissionRepository _repoPermission;
        private AuthorizationService _service;

        public DatabaseFixture databaseFixture = new DatabaseFixture();

        private IUnitOfWork uow;

        [TestInitialize]
        public void Initialize()
        {
            _repoGroup = new GroupRepository(databaseFixture.Factory);
            _repoPermission = new PermissionRepository(databaseFixture.Factory);

            uow = databaseFixture.UnitOfWork;



            var store = new MyUserStore(databaseFixture.Factory.Get());

            var userRepository = new UserRepository(store);

            _service = new AuthorizationService(_repoGroup, _repoPermission,userRepository, uow);

            Database.SetInitializer(new BaseTest());
        }

        [TestMethod]
        [TestCategory("Authorization - Group")]
        public void Deveria_Adicionar_Um_Grupo()
        {
            _repoGroup.Add(ObjectBuilder.CreateGroup());

            uow.Commit();

            var list = _repoGroup.GetAll();

            Assert.AreEqual(3, list.Count);
        }

        [TestMethod]
        [TestCategory("Authorization - Group")]
        public void Deveria_Excluir_Um_Grupo()
        {
            var group = _repoGroup.GetById(1);

            _repoGroup.Delete(group);

            uow.Commit();

            var list = _repoGroup.GetAll();

            Assert.AreEqual(1, list.Count);
        }

        [TestMethod]
        [TestCategory("Authorization - Group")]
        public void Deveria_Buscar_Todos_Grupos()
        {
            var list = _repoGroup.GetAll();

            Assert.AreEqual(2, list.Count);
        }

        [TestMethod]
        [TestCategory("Authorization - Group")]
        public void Deveria_Adicionar_Prermissoes_do_Grupo()
        {
            //Deve receber o Id do grupo
            //E um array de string
            var group = _repoGroup.GetById(1);

            Assert.IsTrue(group.Permissions.Count == 0);

            var newPermission = new Permission { PermissionId = "03" };

            _repoPermission.Add(newPermission);

            uow.Commit();

            _service.AddPermissionsToGroup(1, new[] { "03" });

            uow.Commit();

            group = _repoGroup.GetById(1);

            Assert.AreEqual(1, group.Permissions.Count);
        }
        [TestMethod]
        [TestCategory("Authorization - Group")]
        public void Deveria_Remover_Prermissoes_do_Grupo()
        {
            //Deve receber o Id do grupo
            //E um array de string
            var group = _repoGroup.GetById(1);

            Assert.IsTrue(group.Permissions.Count == 0);

            var newPermission = new Permission { PermissionId = "03" };

            _repoPermission.Add(newPermission);

            uow.Commit();

            _service.AddPermissionsToGroup(1, new[] { "03" });

            uow.Commit();

            group = _repoGroup.GetById(1);

            Assert.AreEqual(1, group.Permissions.Count);

            _service.RemovePermissionsFromGroup(1, new[] { "03" });

            Assert.AreEqual(0, group.Permissions.Count);

        }
    }
}