'use strict'
import {getFilmes, getFilmesId,postFilme, putFilme} from "./filmes.js"
const indice = new URLSearchParams(window.location.search).get('id')

const infoFilme = await getFilmesId(indice)
console.log(infoFilme)

const 

function dadosFilme(id){
    if(id){

    }
}