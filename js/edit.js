'use strict'
import {getFilmes, getFilmesId,postFilme, putFilme} from "./filmes.js"
const id = new URLSearchParams(window.location.search).get('id')



// função para puxar os dados do filme pelo ID
async function dadosFilme(){

    if(id){
        
        const infoFilme = await getFilmesId(id)
        // console.log(infoFilme.sinopse)
        
        const nome = document.getElementById('nome')
        
        const sinopse = document.getElementById('sinopse')
        
        const lancamento = document.getElementById('lancamento')
        
        const relancamento = document.getElementById('relancamento')

        const duracao = document.getElementById('duracao')
        
        const valor = document.getElementById('valor')
        const poster = document.getElementById('poster')
        
        nome.value = infoFilme.nome
        sinopse.textContent = infoFilme.sinopse
        duracao.value = tratarDuracao(infoFilme.duracao)
       
        poster.src = infoFilme.foto_capa
        valor.value = infoFilme.valor_unitario
        lancamento.value = infoFilme.data_lancamento.slice(0,10)
        // console.log(infoFilme.data_lancamento.slice(0,10))
        relancamento.value = infoFilme.data_relancamento

    }else{
        return false
    } 
     
}
function tratarDuracao(string){
    const stringTratada = string.slice(11,19)
    return stringTratada
}

const poster = document.getElementById('poster')
const link = document.getElementById('link')

// Mudar capa do filme
link.addEventListener('keyup', ()=>{
    poster.src = link.value 
})

const salvar = document.getElementById('salvar')

// Botão de salvar alterações
salvar.addEventListener('click', () => {

    const nomeInput = nome.value;
    const sinopseInput = sinopse.value;
    const duracaoInput = duracao.value
    const dataLancamentoInput = lancamento.value;
    const dataRelancamentoInput = relancamento.value;
    const precoInput = valor.value;
    const fotoCapaInput = poster.src;

    const alteracoes = {
        nome: nomeInput,
        sinopse: sinopseInput,
        duracao: duracaoInput,
        data_lancamento: dataLancamentoInput,
        data_relancamento: dataRelancamentoInput,
        valor_unitario: precoInput,
        foto_capa: fotoCapaInput
    }

    

    putFilme(id, alteracoes)
        
        window.location.href = './dashboard.html';
        
    
});


//









dadosFilme()

