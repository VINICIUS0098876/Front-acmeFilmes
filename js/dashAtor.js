'use strict'
import {getAtor, deleteAtor, selectAtorBySexo} from "./filmes.js"
const listaFilme = await getAtor()
const container = document.getElementById('container')
const searchBar = document.getElementById('searchBar')

const searchButton = document.getElementById('searchButton')
searchButton.addEventListener('click', pesquisar)
async function pesquisar(){
    const pesquisaAtor = await selectAtorBySexo(searchBar.value)
    const listaFilmes = pesquisaAtor.sigla
    console.log(listaFilmes)
    apagarListaFilmes()

    listaFilmes.forEach(filme => {
        console.log(filme)
        criarCard(filme)
    });
}
searchBar.addEventListener('keypress', (event)=>{
    if(event.key === "Enter"){
        pesquisar()
    }
})
function apagarListaFilmes(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}



function criarFilme(info){
    const filme = document.createElement('div')
    filme.classList.add('h-20','border-b-4','border-[#ECDDA2]', 'grid', 'grid-cols-4', 'place-items-center')
    const id = document.createElement('h1')
    id.classList.add('text-[#ECDDA2]','text-3xl')
    id.textContent=info.id_ator
    const produto = document.createElement('p')
    produto.textContent=info.nome
    produto.classList.add('text-[#ECDDA2]','text-3xl')
    const valor = document.createElement('p')
    valor.classList.add('text-[#ECDDA2]','text-3xl')
    valor.textContent= info.nome_artistico
    const icones = document.createElement('div')
    icones.classList.add('text-[#ECDDA2]','text-3xl','flex','gap-4')
    const iconeEditar = document.createElement('i')
    iconeEditar.classList.add('bx','bxs-edit-alt','cursor-pointer')
    const iconeDeletar = document.createElement('i')
    iconeDeletar.classList.add('bx','bxs-trash','text-[#FF0000]','cursor-pointer')

    icones.replaceChildren(iconeEditar,iconeDeletar)
    filme.replaceChildren(id,produto,valor,icones)
    container.appendChild(filme)

    iconeEditar.addEventListener('click',()=>{
        window.location.href='../editar.html?id='+info.id_ator
    })
    iconeDeletar.addEventListener('click',()=>{
        deleteAtor(info.id_ator)
        window.location.reload()
    })
}

const add = document.getElementById('add')

add.addEventListener('click', ()=>{
    window.location.href = '../cadastrarAtor.html'
})

listaFilme.forEach(filme => {
    criarFilme(filme)
});