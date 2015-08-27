﻿using Infrastructure.DAO.ORM.Common;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NDDigital.DiarioAcademia.Dominio.Contracts;
using NDDigital.DiarioAcademia.Dominio.Entities;
using NDDigital.DiarioAcademia.Infraestrutura.DAO.Common.Uow;
using NDDigital.DiarioAcademia.Infraestrutura.Orm.Common;
using NDDigital.DiarioAcademia.Infraestrutura.Orm.Repositories;
using NDDigital.DiarioAcademia.IntegrationTests.Base;
using System.Data.Entity;

namespace Test
{
    [TestClass]
    public class TurmaEFTest
    {
        public ITurmaRepository _repo;
        public IUnitOfWork _uow;
        public EntityFrameworkFactory _factory;

        [TestInitialize]
        public void Initialize()
        {
            Database.SetInitializer(new BaseTest());

            _factory = new EntityFrameworkFactory();

            _uow = new EntityFrameworkUnitOfWork(_factory);

            _repo = new TurmaRepositoryEF(_factory);
        }

        [TestMethod]
        [TestCategory("Teste de Integração Turma")]
        public void Deveria_Remover_Turma_ORM_Test()
        {
            var turma = ObjectBuilder.CreateTurma();

            _repo.Add(turma);
            _uow.Commit();

            var turmasEncontradas = _repo.GetAll();

            Assert.AreEqual(2, turmasEncontradas.Count);

            _repo.Delete(2);

            _uow.Commit();

            turmasEncontradas = _repo.GetAll();

            Assert.AreEqual(1, turmasEncontradas.Count);
        }

        [TestMethod]
        [TestCategory("Teste de Integração Turma")]
        public void Deveria_Persistir_Turma_ORM_Test()
        {
            var turma = ObjectBuilder.CreateTurma();

            _repo.Add(turma);

            _uow.Commit();

            var qtdTurmas = _repo.GetAll().Count;

            Assert.AreEqual(2, qtdTurmas);
        }

        [TestMethod]
        [TestCategory("Teste de Integração Turma")]
        public void Deveria_Buscar_Turma_ORM_Test()
        {
            var turmaEncontrada = _repo.GetById(1);

            Assert.IsNotNull(turmaEncontrada);
            Assert.AreEqual(1, turmaEncontrada.Id);
        }

        [TestMethod]
        [TestCategory("Teste de Integração Turma")]
        public void Deveria_Editar_Turma_ORM_Test()
        {
            var turmaEncontrada = _repo.GetById(1);
            turmaEncontrada.Ano = 2016;

            _repo.Update(turmaEncontrada);
            _uow.Commit();

            var turmaEditada = _repo.GetById(1);

            Assert.AreEqual(2016, turmaEditada.Ano);
        }

        [TestMethod]
        [TestCategory("Teste de Integração Turma")]
        public void Deveria_Buscar_Todas_Turmas_ORM_Test()
        {
            var turmasEncontradas = _repo.GetAll();

            Assert.AreEqual(1, turmasEncontradas.Count);
        }
    }
}