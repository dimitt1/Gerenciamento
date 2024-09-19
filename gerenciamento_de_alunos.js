// Definição dos registros de cada Aluno (1)
// Função que cria os registros
const aluno = Object.freeze({})

const criarRegistro = ({...reg}) => (nome,idade,matricula,curso) =>{
    reg.nome = String(nome)
    reg.idade = Number(idade)
    reg.matricula = Number(matricula)
    reg.curso = String(curso)
    return reg
}
// Aplicação da função criarRegistro:
const Dimitri = Object.freeze(criarRegistro(aluno)(`Dimitri`,19,202400018001,`CC`))
const Nayara = Object.freeze(criarRegistro(aluno)(`Nayara`,19,202300013002,`SI`))
const Pericles = Object.freeze(criarRegistro(aluno)(`Pericles`, 19,202500014003, `EC`))


// Criação da Turma (2)
const turma = Object.freeze([])


// Função adicionar alunos (3)
// Cria uma nova cópia da lista turma
const adicionarAluno = ({...reg}) => (lista) => (nome,idade,matricula,curso) =>{
    reg.nome = String(nome)
    reg.idade = Number(idade)
    reg.matricula = Number(matricula)
    reg.curso = String(curso)
    const novaTurma = [...lista,reg]
        return novaTurma
}

const turma1 = Object.freeze(adicionarAluno(aluno)(turma)(`Dimitri`,19,202200018444,`CC`))
const turma2 = Object.freeze(adicionarAluno(aluno)(turma1)(`Pericles`, 19,202400012003, `EC`))
const turma3 = Object.freeze(adicionarAluno(aluno)(turma2)(`Nayara`, 19,202300013003, `SI`))
// console.log(turma1)
// console.log(turma2)
// console.log(turma3)


// Função para mostrar a Turma (4)
const listarAlunos = () => console.log(turma3)
//listarAlunos()


//Função que busca alunos pelo curso (5)
const buscarPorCurso = (lista) => (curso) => lista.filter((x) => x.curso == curso)
//Const da lista de pessoas de um dado Curso
const filtrar = buscarPorCurso(turma3)
// console.log(filtrar('EC'))


// Função remover alunos (6)
// lista de alunos removidos
const removerAluno = (lista) => (nome) => lista.filter((x) => x.nome!= nome)
// Const da turma reduzida de alunos
const turma4 = removerAluno(turma3)(`Pericles`)
// console.log(turma4)


// Função que ordena os alunos do mais antigo para o mais recente (7)
const ordenar = ([...lista]) => lista.sort((a,b) => a.matricula < b.matricula ? -1 : a.matricula > b.matricula ? 1 : 0)
//console.log(ordenar(turma3))


// Função que retorna a quantidade de alunos em cada curso presentes em uma turma (8)
const quantidade = (lista) => (curso) => lista.filter((x) => x.curso == curso).length
const filtrado = quantidade(turma3)
//console.log(`O números de pessoas nesse curso é ${filtrado('CC')}`)

// Função que edite os valores de campos do registro de algum aluno (9)
const mudarAluno = (fn1) =>  (lista) => (nome) => (fn2) =>{
    const turmaAtualizada = fn1(lista)(nome)
    const alunoEditado = fn2(turmaAtualizada)
    const turmaUpdate = (turmaAtualizada,alunoEditado)
    return turmaUpdate
}
const editar = mudarAluno(removerAluno)(turma3)(`Pericles`)(adicionarAluno(aluno))
//console.log(editar(`Caio`,21,202100015555,`CC`))