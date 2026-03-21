const axios = require('axios')

const appid = 'ef0b0973b783e0614ac87612ec04344b'
const baseURL = 'https://api.openweathermap.org/data/2.5/forecast'
const q = 'Itu'
const cnt = 1
const units = 'metric'
const lang = 'pt_br'
const url = `${baseURL}?q=${q}&appid=${appid}&cnt=${cnt}&units=${units}&lang=${lang}`

// console.log(url)

axios.get(url) // Comportamento assincrono, retorno objeto do tipo: Promise. Logo posso usar Then/catch
.then(res => {
    console.log("\nData: ")
    console.log(res.data)
    return res.data
})
.then(res => {
    console.log("\nLista: ")
    console.log(res.list)
    return res.list
})
.then(res => {
    //mostrar temperatura máxima da primeira previsão do tempo
    console.log("\nTemperatura máxima: ")
    console.log(res[0].main['temp_max'])
    return res
})
.then(previsoes => {
    //iterar sobre a lista aqui
    for(let previsao of previsoes){
        //quero exibir a descricao de cada uma
        console.log("\nDescrição: ")
        console.log(previsao.weather[0].description)
    }
})
console.log('A')