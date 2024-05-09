'use strict'
import {getAtorId, getFilmes, getFilmesId,getNacionalidade,getSexo,putAtor} from "./filmes.js"
const id = new URLSearchParams(window.location.search).get('id')
const sexoSelect = document.getElementById('sexo')
const nacionalidadeSelect = document.getElementById('nacionalidade')
const nome = document.getElementById('nome')

const nomeArtistico = document.getElementById('nome_artistico')

const nascimento = document.getElementById('nascimento')

const falecimento = document.getElementById('falecimento')

const biografia = document.getElementById('sinopse')

const listaSexos = await getSexo()
listaSexos.forEach(sexo => {
    const option = document.createElement('option')
    option.value = sexo.id_sexo
    option.textContent = sexo.nome
    sexoSelect.appendChild(option)
});

const listaNacionalidades = await getNacionalidade()
listaNacionalidades.forEach(nacionalidade => {
    const option = document.createElement('option')
    option.value = nacionalidade.id_nacionalidade
    option.textContent = nacionalidade.nome
    nacionalidadeSelect.appendChild(option)
});

console.log(nacionalidadeSelect)
// função para puxar os dados do filme pelo ID
async function dadosFilme(){

    if(id){
        
        const infoAtor = await getAtorId(id)
        // console.log(infoFilme.sinopse)
        

        
        // const valor = document.getElementById('valor')
        const poster = document.getElementById('poster')
        
        nome.value = infoAtor.nome
        nomeArtistico.value = infoAtor.nome_artistico
        biografia.textContent = infoAtor.biografia
        nascimento.value = infoAtor.data_nascimento.slice(0,10)
        sexoSelect.value = infoAtor.sexo[0].id_sexo; 
        if(infoAtor.nacionalidade.length>0){
            nacionalidadeSelect.value = infoAtor.nacionalidade[0].id_nacionalidade; 
        }
        poster.src = infoAtor.foto
        // console.log(infoFilme.data_lancamento.slice(0,10))
        if(infoAtor.data_falecimento){
            falecimento.value = infoAtor.data_falecimento.slice(0,10)
        }

    }else{
        return false
    } 
     
}
// function tratarDuracao(string){
//     const stringTratada = string.slice(11,19)
//     return stringTratada
// }

const poster = document.getElementById('poster')
const link = document.getElementById('link')

// Mudar capa do filme
link.addEventListener('keyup', ()=>{
    poster.src = link.value 
})

const salvar = document.getElementById('salvar')
salvar.addEventListener('click', async () => {

    const nomeInput = nome.value;
    const nomeArtisticoInput = nomeArtistico.value;
    const dataNascimentoInput = nascimento.value
    const dataFalecimentoInput = falecimento.value;
    const biografiaInput = biografia.value;
    const sexoInput = sexoSelect.value;
    const nacionalidadeInput = nacionalidadeSelect.value;
    const fotoCapaInput = poster.src;

    const alteracoes = {
        nome: nomeInput,
        nome_artistico: nomeArtisticoInput,
        data_nascimento: dataNascimentoInput,
        data_falecimento: dataFalecimentoInput,
        biografia: biografiaInput,
        id_sexo: sexoInput,
        id_nacionalidade: nacionalidadeInput,
        foto: fotoCapaInput
    }

    

    const atualizarAtorResult = await putAtor(id, alteracoes)
    if(atualizarAtorResult){
        window.location.href = './dashAtor.html';
    }
        
    
});

// Botão de salvar alterações


//









dadosFilme()

