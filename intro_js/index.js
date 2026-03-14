// Para comentar tudo ou descomentar, selecione as linhas e utilize CTRL + ;

// //console.log("Hello, World")

// //declarando constantes
// const nome = 'LeandrinhoGameplays'
// console.log(nome)
// // nome = 'Lucas' --> GERA ERRO, pois "nome" é uma constante
// const idade = 25
// console.log(typeof(nome)) //string
// console.log(typeof(idade)) //number

// //declarando variáveis
// let num = 16
// console.log(num)
// num = 22
// console.log(num)

// let passou = true
// console.log(typeof(passou)) //boolean

// let b //b é um ponteiro
// console.log(b) //undefined
// b = 1.5
// console.log(typeof(b)) //number, pois é o tipo do objeto ao qual 'b' aponta
// console.log(b)
// b = 'abc' //Ponteiro 'b' passa a apontar para uma string
// console.log(typeof(b)) //number, pois é o tipo do objeto ao qual 'b' aponta
// console.log(b)

//e o var?
// NÃO USE
    // var idade = 18
    // console.log(`Oi, ${nome}`) //Gera um erro, mas não um que impede o funcionamento do código
    // if(idade >= 18){
    //     var nome = 'João'
    //     console.log("Parabéns, " + nome + ". Você pode dirigir")
    // }
    // console.log('Até, ' + nome)

// var linguagem = 'Javascript'
// console.log('Aprendendo ' + linguagem)
// var linguagem = 'Java'
// console.log(`Aprendendo ${linguagem}`)


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


// JSON: JavaScript Object Notation
// Uma pessoa se chama Maria, tem 21 anos e mora na Rua B, número 50
// const pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 50
//     }
// }

// // Uma pessoa que se chama João e tem 17 anos
// // let pessoa = {
// //     nome: 'João',
// //     idade: 17
// // }
// console.log(pessoa.nome)
// console.log(pessoa['idade'])
// console.log(pessoa.endereco.logradouro) // Rua B
// console.log(pessoa['endereco']['numero']) // 50
// console.log(pessoa.endereco['logradouro']) //Rua B
// console.log(pessoa['endereco'].numero) // 50

const veiculo = {
    modelo: "A",
    marca: "bc",
    placa: "abcd89"
}

const concessionaria = {
    nome: "Concessionaria",
    CNPJ: "1234",
    endereco: {
        logradouro: 'Rua B',
        numero: 50
    }
}
