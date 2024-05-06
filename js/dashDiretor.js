'use strict'
import {getDiretor,deleteDiretor} from "./filmes.js"
const listaDiretor = await getDiretor()
const container = document.getElementById('container')

function criarDiretor(info){
    const filme = document.createElement('div')
    filme.classList.add('h-20','border-b-4','border-[#ECDDA2]', 'grid', 'grid-cols-4', 'place-items-center')

    const id = document.createElement('h1')
    id.classList.add('text-[#ECDDA2]','text-3xl')
    id.textContent = info.id_diretor

    const produto = document.createElement('p')
    produto.textContent = info.nome
    produto.classList.add('text-[#ECDDA2]','text-3xl')

    const valor = document.createElement('p')
    valor.classList.add('text-[#ECDDA2]','text-3xl')
    valor.textContent= info.sexo[0].nome

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
        window.location.href='../editar.html?id=' + info.id_diretor
    })
    iconeDeletar.addEventListener('click',()=>{
        deleteDiretor(info.id_diretor)
        window.location.reload()
    })
}

const add = document.getElementById('add')

add.addEventListener('click', ()=>{
    window.location.href = '../cadastrarDiretor.html'
})
console.log(listaDiretor)

listaDiretor.forEach(diretor => {
    criarDiretor(diretor)
});

