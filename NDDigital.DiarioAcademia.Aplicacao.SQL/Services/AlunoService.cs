﻿using System;
using System.IO;
using iTextSharp.text;
using iTextSharp.text.pdf;
using NDDigital.DiarioAcademia.Aplicacao.DTOs;
using NDDigital.DiarioAcademia.Dominio;
using System.Collections.Generic;
using System.Linq;
using NDDigital.DiarioAcademia.Dominio.Entities;
using NDDigital.DiarioAcademia.Dominio.Contracts;

namespace NDDigital.DiarioAcademia.Aplicacao.ORM.Services
{
    public interface IAlunoService
    {
        void Add(AlunoDTO alunoDto);

        void Update(AlunoDTO alunoDto);

        void Delete(int id);

        AlunoDTO GetById(int id);

        IEnumerable<AlunoDTO> GetAll();

        IEnumerable<AlunoDTO> GetAllByTurma(int ano);

        Endereco BuscaEnderecoPorCep(string p);

        void GerarRelatorioAlunosPdf(int ano, string path);
    }

    public class AlunoService : IAlunoService
    {
        private IAlunoRepository _alunoRepository;

        public AlunoService()
        {

        }

        public void Add(AlunoDTO alunoDto)
        {

        }

        public void Update(AlunoDTO alunoDto)
        {

        }

        public void Delete(int id)
        {

        }

        public AlunoDTO GetById(int id)
        {
            return null; 
        }

        public IEnumerable<AlunoDTO> GetAll()
        {
            return null; 
        }

        public IEnumerable<AlunoDTO> GetAllByTurma(int ano)
        {
            return null;;
        }

        public Endereco BuscaEnderecoPorCep(string cep)
        {
            return null; 
        }

        public void GerarRelatorioAlunosPdf(int ano, string path)
        {
            try
            {
                FileStream fs = new FileStream(path,
                           FileMode.Create, FileAccess.Write, FileShare.None);

                Document doc = new Document();

                PdfWriter writer = PdfWriter.GetInstance(doc, fs);

                doc.Open();

                doc.Add(new Paragraph("Relatório de presenças - Academia do prgramador " + ano +":\n\n"));
                doc.Add(new Paragraph("Alunos/Presenças/Faltas:\n\n"));

                foreach (var listaAluno in GetAllByTurma(ano))
                {
                    doc.Add(new Paragraph(listaAluno.Descricao));
                }

                doc.Close();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }     
          
        }
    }
}