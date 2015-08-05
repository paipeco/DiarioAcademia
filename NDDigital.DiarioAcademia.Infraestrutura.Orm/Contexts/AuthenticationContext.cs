﻿using Microsoft.AspNet.Identity.EntityFramework;
using NDDigital.DiarioAcademia.Infraestrutura.Orm.Identity;
using System.Collections.Generic;
using System.Data.Entity;

namespace NDDigital.DiarioAcademia.Infraestrutura.Orm.Contexts
{
    public class AuthenticationContext : IdentityDbContext<ApplicationUser>
    {
        public AuthenticationContext()
            : base("DiarioAuthContext", throwIfV1Schema: false)
        {
            Database.SetInitializer(new DropCreateDatabaseIfModelChanges<AuthenticationContext>());
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
        }

        public DbSet<Group> Groups { get; set; }
        public DbSet<Permission> Permissions { get; set; }

        public static AuthenticationContext Create()
        {
            return new AuthenticationContext();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ApplicationUser>()
                .ToTable("TBUser")
                .Ignore(c => c.EmailConfirmed);
            modelBuilder.Entity<Group>().ToTable("TBGroup");
            //TODO: DAR UM JEITO DE RENOMEAR A TABELA INTERMEDIARIA
            modelBuilder.Entity<Permission>().ToTable("TBPermission");
        }
    }
}