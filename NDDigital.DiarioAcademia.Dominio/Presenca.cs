﻿using NDDigital.DiarioAcademia.Dominio.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NDDigital.DiarioAcademia.Dominio
{
    public class Presenca : Entity
    {
        public virtual Aula Aula { get; private set; }

        public virtual Aluno Aluno { get; private set; }        

        public string StatusPresenca { get; private set; }

        protected Presenca()
        {
            GenerateNewIdentity();
        }

        public Presenca(Aula aula, Aluno aluno, string statusPresenca) : this()
        {
            this.Aula = aula;
            this.Aluno = aluno;
            this.StatusPresenca = statusPresenca;
        }

        public override string ToString()
        {
            return string.Format("{0}: {1} -> {2}", Aula.Data.ToString("dd/MM/yyyy"),
                Aluno.Nome, StatusPresenca == "F" ? "Faltou" : "Compareceu");
        }
    }
}
