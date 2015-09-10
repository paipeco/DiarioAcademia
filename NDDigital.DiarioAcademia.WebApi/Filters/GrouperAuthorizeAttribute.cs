﻿using Microsoft.AspNet.Identity;
using NDDigital.DiarioAcademia.Aplicacao.Services;
using NDDigital.DiarioAcademia.Infraestrutura.DAO.Common.Uow;
using NDDigital.DiarioAcademia.Infraestrutura.IoC;
using NDDigital.DiarioAcademia.Infraestrutura.Security.Contracts;
using NDDigital.DiarioAcademia.Infraestrutura.Security.Entities;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Security.Claims;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace NDDigital.DiarioAcademia.WebApi.Filters
{
    public class GrouperAuthorizeAttribute : AuthorizeAttribute
    {
        private IAuthorizationService _authservice;

        private List<string> Permissions { get; set; }

        public GrouperAuthorizeAttribute()
        {
            _authservice = new AuthorizationService(
                Injection.Get<IGroupRepository>(),
                Injection.Get<IPermissionRepository>(),
                Injection.Get<IAccountRepository>(),
                Injection.Get<IUnitOfWork>()
                );

        }
        public GrouperAuthorizeAttribute(params string[] permissions):this()
        {
            Permissions = new List<string>();
            
            foreach (var item in permissions)
            {

                var split = item.Split('.');
                Permissions.AddRange(split);
            }

            Permissions = Permissions.Distinct().ToList();
            Permissions.RemoveAll(x => x == "");
        }

        private void ConcatAll(string[] items)
        {
            

        }

        protected override bool IsAuthorized(HttpActionContext actionContext)
        {
             var result = base.IsAuthorized(actionContext);
             
             if (result)
             {
                 ClaimsIdentity claimsIdentity;
                 var httpContext = HttpContext.Current;
                 if (!(httpContext.User.Identity is ClaimsIdentity))
                       return false;
                 
                 claimsIdentity = httpContext.User.Identity as ClaimsIdentity;
             
                 var subIdClaims = claimsIdentity.FindFirst("user");

                if (subIdClaims == null) return false;

                 var userSubId = subIdClaims.Value;
             
                 result = _authservice.IsAuthorized(userSubId, Permissions.ToArray());
             }
             
             
             return result;

        }

    }
}