'use strict'
import {getFilmes, postFilme, selectNameFilmes} from "./filmes.js"

console.table(await getFilmes())

import { getFilmesId } from "./filmes.js"

const search = new URLSearchParams(window.location.search).get('search')
const searchBar = document.getElementById('searchBar')
const container = document.getElementById('container')
    if(search==''){
        searchBar.focus()
    }
    if(search){
        searchBar.value = search
        const data = await selectNameFilmes(search)
        if(data){
            data.forEach(filme => {
                criarCard(filme)
            })
        }else{
            searchBar.focus()
        }
    }

const searchButton = document.getElementById('searchButton')
console.table(await getFilmesId(2))


function criarCard (filme){
    const container = document.getElementById('container')
    container.classList.add('gap-8')
    const card = document.createElement('div')
    card.classList.add('flex')
    card.classList.add('flex-col')
    card.classList.add('text-[#ECDDA2]')
    card.classList.add('justify-center')
    card.classList.add('cursor-pointer')
    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome
    titulo.classList.add('bg-[#7A7A7A]')
    titulo.classList.add('font-bold')
    titulo.classList.add('text-center')
    titulo.classList.add('mr-1')
    titulo.classList.add('w-64')
    titulo.classList.add('border-b-4')
    titulo.classList.add('border-x-4')
    titulo.classList.add('border-[#ECDDA2]')
    const texto = document.createElement('p')
    texto.textContent = filme.sinopse
    texto.classList.add('w-72')
    const preco = document.createElement('p')
    preco.textContent = filme.valor_unitario
    const capa = document.createElement('img')
    capa.src = filme.foto_capa
    capa.classList.add('h-92')
    capa.classList.add('w-64')
    capa.classList.add('border-t-4')
    capa.classList.add('border-x-4')
    capa.classList.add('border-[#ECDDA2]')
    const dataLancamento = document.createElement('p')
    dataLancamento.textContent = filme.data_lancamento
    card.append(capa, titulo)
    container.appendChild(card)
    card.addEventListener('click',()=> {
        window.location.href='../sobre.html?id='+filme.id
    })
}

async function preencherContainer(){
    const container = document.querySelector('body')

    const filmes = await getFilmes()

    filmes.forEach(filme => {
        criarCard(filme)
    })
}

// const input = document.getElementById('input')

// input.addEventListener('keyup', async(nome)=>{
//     if(input == nome){
//         const nomeFilme = await selectNameFilmes()
//          nomeFilme = preencherContainer()
//     }
// })

searchBar.addEventListener('keypress', (event)=>{
    if(event.key === "Enter"){
        searchButton.click()
    }
})




preencherContainer()
