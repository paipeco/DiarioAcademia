﻿using NDDigital.DiarioAcademia.Aplicacao.Services;
using NDDigital.DiarioAcademia.Infraestrutura.Security.Entities;
using NDDigital.DiarioAcademia.WebApiFull.Controllers.Base;
using NDDigital.DiarioAcademia.WebApiFull.Filters;
using System;
using System.Linq;
using System.Web.Http;

namespace NDDigital.DiarioAcademia.WebApiFull.Controllers.Security
{
    [GrouperAuthorize(PermissionSpec.Group)]
    public class GroupController : BaseSecurityController
    {
        private IGroupService _groupService;

        public GroupController()
        {
            _groupService = new GroupService(GroupRepository, Uow);
        }

        // GET: api/Group
        [Authorize]
        public IHttpActionResult Get()
        {
            var list = _groupService.GetAll();

            return Ok(list.Select(g => TheModelFactory.Create(g)).ToList());      
        }

        // GET: api/Group/1
        public IHttpActionResult Get(int id)
        {
            var group = _groupService.GetById(id);

            return Ok(TheModelFactory.Create(group));
        }

        // GET: api/Group?username=username
        [GrouperAuthorize(Basic =true)]
        public IHttpActionResult Get(string username)
        {
            var list = _groupService.GetByUser(username);

            return Ok(list.Select(g => TheModelFactory.Create(g)));      
        }

        // POST: api/Group
        public IHttpActionResult Post([FromBody]Group value)
        {
            _groupService.Add(value);
            return Ok(TheModelFactory.Create(value));

        }

        // PUT: api/Group/5
        public IHttpActionResult Put(int id, [FromBody]Group value)
        {
            // TODO: rever implementação
            Group group =  _groupService.GetById(id);
            group.Name = value.Name;
            group.IsAdmin = value.IsAdmin;
            try
            {
                _groupService.Update(group);
            }
            catch (Exception ex)
            {
                for (; ex.InnerException != null; ex = ex.InnerException) { }
                throw ex;
            }

            return Ok(TheModelFactory.Create(value));
        }

        // DELETE: api/Group/5
        public void Delete(int id)
        {
            _groupService.Delete(id);
        }
    }
}