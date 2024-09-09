"use strict";

var alunos = [{
  nome: 'Fernando',
  nota: 8
}, {
  nome: 'Amanda',
  nota: 7
}, {
  nome: 'Eva',
  nota: 6
}, {
  nome: 'Julia',
  nota: 5
}];
function alunosComNotaMinima(alunos, notaMinima) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= notaMinima;
  });
}
var alunosAprovados = alunosComNotaMinima(alunos, 6);
console.log(alunosAprovados);