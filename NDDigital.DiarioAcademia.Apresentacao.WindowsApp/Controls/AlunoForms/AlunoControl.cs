﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using NDDigital.DiarioAcademia.Aplicacao.Services;
using NDDigital.DiarioAcademia.Aplicacao.DTOs;

namespace NDDigital.DiarioAcademia.Apresentacao.WindowsApp.Controls.AlunoForms
{
    public partial class AlunoControl : UserControl
    {

        private IAlunoService _alunoService;

        public AlunoControl()
        {
            InitializeComponent();
        }

        public AlunoControl(IAlunoService _service)
            : this()
        {
            this._alunoService = _service;
        }

        public AlunoDTO GetAluno()
        {
            AlunoDTO alunoSelecionado = listAlunos.SelectedItem as AlunoDTO;

             alunoSelecionado = _alunoService.GetById(alunoSelecionado.Id);

            return alunoSelecionado;
        }

        public void RefreshGrid()
        {
            int anoTurma = Principal.Instance.AnoTurmaSelecionado;//TODO:ARRUMAR ISSO DESKTOP

            var alunos = _alunoService.GetAllByTurmaId(anoTurma);

            listAlunos.Items.Clear();

            foreach (var aluno in alunos)
            {
                listAlunos.Items.Add(aluno);
            }
        }

    }
}
