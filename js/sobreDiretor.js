'use strict'

import {getDiretor, getDiretorId, getFilmesId} from "./filmes.js"

const indice = new URLSearchParams(window.location.search).get('id');
const listaDiretores = await getDiretorId(indice)
console.log(listaDiretores)

function preencherCampos(filme){
    const titulo = document.getElementById('titulo')
    titulo.textContent = filme.nome
    const poster = document.getElementById('poster')
    poster.src = filme.foto
    const sinopse = document.getElementById('sinopse')
    const duracao = document.getElementById('duracao')
    const lancamento = document.getElementById('lancamento')
    lancamento.textContent = "Data de nascimento: "+tratarData(filme.data_nascimento)
    const relancamento = document.getElementById('relancamento')
    if(filme.relancamento){
        relancamento.textContent = "Data de falecimento: "+tratarData(filme.data_falecimento)
    } else {
        relancamento.textContent = "Data de falecimento: Sem previsão da morte!"
    }
    sinopse.textContent=filme.biografia
    const sexo = document.getElementById('sexo')
    sexo.textContent= "Sexo: "+filme.sexo[0].nome
    const nacionalidade = document.getElementById('nacionalidade')
    nacionalidade.textContent = "Nacionalidade: " + filme.nacionalidade[0].nome

    // duracao.textContent="DURAÇÃO: "+tratarDuracao(filme.duracao) 
    const diretores = document.getElementById('diretor')


}




function tratarDuracao(string){
    const stringTratada = string.slice(11,19)
    return stringTratada
}
function tratarData(string){
    let dataTratada = string.slice(0,10)
    dataTratada = dataTratada.split('-')
    dataTratada = dataTratada[2]+"/"+dataTratada[1]+"/"+dataTratada[0]
    return dataTratada
}

preencherCampos(listaDiretores)















// teste 

// const filme = {
//     "nome": "Teste",
//     "sinopse": "O alemão Oskar Schindler viu na mão de obra judia uma solução barata e viável para lucrar com negócios durante a guerra. Com sua forte influência dentro do partido nazista, foi fácil conseguir as autorizações e abrir uma fábrica. O que poderia parecer uma atitude de um homem não muito bondoso, transformou-se em um dos maiores casos de amor à vida da História, pois este alemão abdicou de toda sua fortuna para salvar a vida de mais de mil judeus em plena luta contra o extermínio alemão.",
//     "duracao": "03:15:00",
//     "data_lancamento": "1933-12-31",
//     "data_relancamento": "1933-12-31",
//     "foto_capa": "https://br.web.img2.acsta.net/medias/nmedia/18/90/59/58/20103846.jpg",
//     "valor_unitario": 27.00
// }

// postFilme(filme)