'use strict'
import {postDiretor} from "./filmes.js"

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

cadastrar.addEventListener('click', ()=>{

    const tituloInput = titulo.value
    const duracaoInput = duracao.value
    const dataLancamentoInput = dataLancamento.value
    const dataRelancamentoInput = dataRelancamento.value
    const capaInput = poster.src
    const classificacaoInput = idClassificacao.value
    const insert ={
        nome: tituloInput,
        biografia: duracaoInput,
        data_nascimento: dataLancamentoInput,
        data_falecimento: dataRelancamentoInput,
        foto: capaInput,
        id_sexo: classificacaoInput
    }

    postDiretor(insert)
    console.log(insert)
    // window.location.href = './dashAtor.html'
})

link.addEventListener('keyup', ()=>{
    poster.src = link.value 
})


