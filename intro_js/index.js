//// Para comentar tudo ou descomentar, selecione as linhas e utilize CTRL + ;

var linguagem = 'Javascript'

console.log(`Aprendendo ${linguagem}`)


// const eAgora = () =>{
//     let cont = 1
//     const f1 = () => console.log(cont)
//     cont++
//     const f2 = () => console.log(cont)
//     cont++
//     return {f1, f2}
// }
// const res = eAgora()
// // As linhas a seguir executam as funções f1 e f2, que estão dentro de res
// res.f1() // Roda com o cont final
// res.f2()

// let concessionaria = {
//     nome: "Concessionaria",
//     CNPJ: "1234",
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 50,
//         bairro: {
//             nome: "aaaa",
//         }
//     },
//     estoque: [  //lista
//         {
//             modelo: "ka",
//             marca: "ford",
//             placa: "aad-1234"
//         },
//         {
//             modelo: "fusca",
//             marca: "vw",
//             placa: "add-4455"
//         }
//     ]
// }

// console.log(concessionaria.estoque[0].modelo)
// console.log(concessionaria["estoque"][1]["modelo"])

// const calculadora = {
//     operacoes: {
//         soma: (a, b) => {return a + b},
//         subtracao: (a, b) => a - b,
//         multiplicacao: function (a, b){
//             return a * b
//         },
//         divisao: (a, b) => a / b
//     }
// }

// console.log(calculadora.operacoes.soma(2,3))
// console.log(calculadora["operacoes"]["subtracao"](4, 5))
// console.log(calculadora.operacoes.divisao(1,3))

// function demorada(tempo){
//     const dataAtualMais2Segundos = new Date().getTime() + tempo
//     while(new Date().getTime() <= dataAtualMaisTempo);
//     const d = 8 + 2 * 6
//     return d
// }

// setTimeout(() => {
//     console.log("Agendada pelo setTimeout")
// }, 0)
// const dataAtualMais5Segundos = new Date().getTime() + 5000
// while(new Date().getTime() <= dataAtualMais5Segundos);
// console.log("Terminando o script principal...")

// const a = 2 + 3
// const b = 6 * 1
// // const d = demorada()

// setTimeout(() => {
//     const d = demorada()
//     console.log(`d: ${d}`)
// }, 500) // No log aparece depois de "e" ser exibido

// const e = a + b * 2

// console.log(`e: ${e}`)
// console.log(a + b) 

// console.log("Eu primeiro...")
// console.log("Agora eu...")
// console.log("Sempre serei a ultima...")

// const fs = require('fs')
// const nomeArquivo = 'arquivo.txt'

// const exibirConteudo = (erro, conteudo) => {
//     console.log("A")
//     if(erro) {
//         console.log(`Deu erro> ${erro}`)
//     }
//     else{
//         console.log(`Conteúdo: ${conteudo}`)
//         const dobro = Number(conteudo.toString()) * 2
//         // Mais uma função callback
//         const finalizar = (erro) => {
//             console.log(erro ? "Deu erro ao escrever o dobro" : "Ok, escreveu o dobro")
//             console.log('C')
//         }
//         fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         console.log('D')
//     }
// }
// fs.readFile(nomeArquivo, exibirConteudo)
// console.log("B")

// const calculoDemorado = (n) => {
//     let ac = 0
//     for(let i = 1; i <= n; i++)
//         ac += i
//     return ac
// }
const calculoDemorado = (n) => {
    return new Promise((resolve, reject) =>{
        // Se n for negativo, propagar um erro
        // Caso contrário, continua como já era
        if(n > 0){
            let ac = 0
            for(let i = 1; i <= n; i++)
                ac += i
            resolve(ac)
        }
        else{
            reject(`Erro, n menor que 0! Valor de n:${n}`)
        }
        
    })
}
const minhaPromise = calculoDemorado(1000)
//then/catch
minhaPromise
.then((resultado) => {console.log(`Resultado: ${resultado}`)})
.catch((erro) => {console.log(`Erro: ${erro}`)})
console.log("A")