const alunos = [
    {nome: 'Fernando', nota: 8},
    {nome: 'Amanda', nota: 7},
    {nome: 'Eva', nota: 4},
    {nome: 'Julia', nota: 5}
];

function alunosComNotaMinima(alunos, notaMinima) {
    return alunos.filter(aluno => aluno.nota >= notaMinima);
}

const alunosAprovados = alunosComNotaMinima(alunos, 6);

console.log(alunosAprovados);