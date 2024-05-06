'use strict'
import {postAtor} from "./filmes.js"

// Import das tags do HTML pelo ID
const titulo = document.getElementById('titulo')
const sinopse = document.getElementById('sinopse')
const duracao = document.getElementById('duracao')
const dataLancamento = document.getElementById('lancamento')
const dataRelancamento = document.getElementById('relancamento')
const valor = document.getElementById('valor')
const cadastrar = document.getElementById('cadastrar')
const poster = document.getElementById('poster')
const idClassificacao = document.getElementById('classificacao')
const idNacionalidade = document.getElementById('nacionalidade')

cadastrar.addEventListener('click', ()=>{

    const tituloInput = titulo.value
    const sinopseInput = sinopse.value
    const duracaoInput = duracao.value
    const dataLancamentoInput = dataLancamento.value
    const dataRelancamentoInput = dataRelancamento.value
    const capaInput = poster.src
    const classificacaoInput = idClassificacao.value
    const nacionalidadeInput = idNacionalidade.value
    const insert ={
        nome: tituloInput,
        nome_artistico: duracaoInput,
        biografia: sinopseInput,
        data_nascimento: dataLancamentoInput,
        data_falecimento: dataRelancamentoInput,
        foto: capaInput,
        id_sexo: classificacaoInput,
        id_nacionalidade: nacionalidadeInput
    }

    postAtor(insert)
    console.log(insert)
    // window.location.href = './dashAtor.html'
})

link.addEventListener('keyup', ()=>{
    poster.src = link.value 
})


