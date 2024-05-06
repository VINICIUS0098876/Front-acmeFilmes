'use strict'
import {getAtorIdPeloNome, getDiretorIdPeloNome, getFilmes, getFilmesId,postFilme, putFilme} from "./filmes.js"

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
const idAtor = document.getElementById('ator')
const idDiretor = document.getElementById('diretor')
const idGenero = document.getElementById('genero')
const link = document.getElementById('link')

cadastrar.addEventListener('click', async ()=>{

    const tituloInput = titulo.value
    const sinopseInput = sinopse.value
    const duracaoInput = duracao.value
    const dataLancamentoInput = dataLancamento.value
    const dataRelancamentoInput = dataRelancamento.value
    const valorInput = valor.value
    const capaInput = poster.src
    const classificacaoInput = idClassificacao.value
    const atorInput = idAtor.value
    const diretorInput = idDiretor.value
    const generoInput = idGenero.value


    const atorId = await getAtorIdPeloNome(atorInput)
    const diretorId = await getDiretorIdPeloNome(diretorInput)



    const insert ={
        nome: tituloInput,
        sinopse: sinopseInput,
        duracao: duracaoInput,
        data_lancamento: dataLancamentoInput,
        data_relancamento: dataRelancamentoInput,
        valor_unitario: valorInput,
        foto_capa: capaInput,
        id_classificacao: classificacaoInput,
        id_genero: generoInput,
        id_ator: atorId,
        id_diretor: diretorId
    }

    console.log(atorInput)
    console.log(diretorInput)


    postFilme(insert)
    console.log(insert)
    // window.location.href = './dashboard.html'
})

link.addEventListener('keyup', ()=>{
    poster.src = link.value 
})


