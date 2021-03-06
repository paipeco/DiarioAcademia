﻿using Infrastructure.DAO.ORM.Common.Base;
using NDDigital.DiarioAcademia.Dominio.Contracts;
using NDDigital.DiarioAcademia.Dominio.Entities;
using NDDigital.DiarioAcademia.Infraestrutura.Orm.Common;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace NDDigital.DiarioAcademia.Infraestrutura.Orm.Repositories
{
    public class AulaRepositoryEF : RepositoryBaseEF<Aula>, IAulaRepository
    {
        public AulaRepositoryEF(EntityFrameworkFactory dbFactory)
            : base(dbFactory)
        {
        }

        public Aula GetByData(DateTime data)
        {
            return GetQueryable().FirstOrDefault(x => x.Data.Equals(data));
        }

        public IList<Aula> GetAllByTurmaId()
        {
            return GetAll();
        }

        public override Aula GetById(int id)
        {
            var aula = GetQueryable()
               .Include(x => x.Turma)
               .Include(x => x.Presencas.Select(a => a.Aluno))
               .FirstOrDefault(x => x.Id == id);

            return aula;
        }

        public override void Delete(Aula entity)
        {
            //entity.ExcluiPresencas();

            int posicao = entity.Presencas.Count - 1;

            while (posicao >= 0)
            {
                var item = entity.Presencas[posicao];

                dataContext.Entry(item).State = EntityState.Deleted;

                posicao--;
            }

            //dataContext.Presencas.

            base.Delete(entity);
        }

        public IList<Aula> GetAll()
        {
            try
            {
           return GetQueryable()
                .Include(x => x.Turma)
                .Include(x => x.Presencas)
                .ToList();
            }
            catch (InvalidOperationException)
            {

                return GetAll();
            }

           
        }

        
    }
}