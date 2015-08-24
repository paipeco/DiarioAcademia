﻿using Infrastructure.DAO.ORM.Common;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NDDigital.DiarioAcademia.Dominio.Contracts;
using NDDigital.DiarioAcademia.Dominio.Entities;
using NDDigital.DiarioAcademia.Infraestrutura.DAO.Common.Uow;
using NDDigital.DiarioAcademia.Infraestrutura.Orm.Common;
using NDDigital.DiarioAcademia.Infraestrutura.Orm.Repositories;
using NDDigital.DiarioAcademia.IntegrantionTests.Base;
using System;
using System.Data.Entity;

namespace NDDigital.DiarioAcademia.IntegrationTests.Base
{
    [TestClass]
    public class AulaEFTest
    {
        public IAulaRepository _repoAula;
        public ITurmaRepository _repoTurma;
        public IUnitOfWork _uow;
        public EntityFrameworkFactory _factory;

        [TestInitialize]
        public void Initialize()
        {
            Database.SetInitializer(new BaseTest());

            _factory = new EntityFrameworkFactory();

            _uow = new EntityFrameworkUnitOfWork(_factory);

            _repoTurma = new TurmaRepositoryEF(_factory);

            _repoAula = new AulaRepositoryEF(_factory);
        }

        [TestMethod]
        [TestCategory("Teste de Integração Aula")]
        public void Deveria_Persistir_Aula_ORM_Test()
        {
            var turmaEncontrada = _repoTurma.GetById(1);

            var aula = ObjectBuilder.CreateAula(turmaEncontrada);

            _repoAula.Add(aula);

            _uow.Commit();

            var aulas = _repoAula.GetAll();

            Assert.AreEqual(2, aulas.Count);
        }

        [TestMethod]
        [TestCategory("Teste de Integração Aula")]
        public void Deveria_Buscar_Aula_ORM_Test()
        {
            var aulaEncontrada = _repoAula.GetById(1);

            Assert.IsNotNull(aulaEncontrada);
            Assert.AreEqual(1, aulaEncontrada.Id);
        }

        [TestMethod]
        [TestCategory("Teste de Integração Aula")]
        public void Deveria_Editar_Aula_ORM_Test()
        {
            var aulaEncontrada = _repoAula.GetById(1);
            aulaEncontrada.Data = DateTime.Now.AddYears(-15);

            _repoAula.Update(aulaEncontrada);

            _uow.Commit();

            var aulaEditada = _repoAula.GetById(1);

            Assert.AreEqual(2000, aulaEditada.Data.Year);
        }

        [TestMethod]
        [TestCategory("Teste de Integração Aula")]
        public void Deveria_Buscar_Todas_Aulas_ORM_Test()
        {
            var aulasEncontradas = _repoAula.GetAll();

            Assert.IsNotNull(aulasEncontradas);
        }

        [TestMethod]
        [TestCategory("Teste de Integração Aula")]
        public void Deveria_Remover_Aula_ORM_Test()
        {
            _repoAula.Add(new Aula());

            _uow.Commit();

            var aulasEncontradas = _repoAula.GetAll();

            Assert.IsTrue(aulasEncontradas.Count == 2);

            _repoAula.Delete(1);

            _uow.Commit();

            aulasEncontradas = _repoAula.GetAll();

            Assert.IsTrue(aulasEncontradas.Count == 1);
        }
    }
}