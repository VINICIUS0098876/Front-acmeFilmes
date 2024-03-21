'use strict'
import {getFilmes, getFilmesId,postFilme, putFilme} from "./filmes.js"
const id = new URLSearchParams(window.location.search).get('id')


console.log(infoFilme)

async function dadosFilme(){

    if(id){
        
        const infoFilme = await getFilmesId(id)
        console.log(infoFilme.sinopse)
        
        const nome = document.getElementById('nome')
        
        const sinopse = document.getElementById('sinopse')
        
        const lancamento = document.getElementById('lancamento')
        
        const relancamento = document.getElementById('relancamento')
        
        const valor = document.getElementById('valor')
        const poster = document.getElementById('poster')
        
        nome.value = infoFilme.nome
        sinopse.textContent = infoFilme.sinopse
        poster.src = infoFilme.foto_capa
        valor.value = 'R$'+infoFilme.valor_unitario
        lancamento.value = infoFilme.data_lancamento.slice(0,10)
        relancamento.value = infoFilme.data_relancamento

    }else{
        return false
    }
}

dadosFilme()