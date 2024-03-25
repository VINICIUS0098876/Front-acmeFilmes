'use strict'

// const form = document.getElementById('form')
const icone = document.getElementById('icone')


// function login(){

//     if(email == 'adm@gmail.com' && senha == 'Amd123@'){
//         window.location.href = './dashboard.html'
//     }else{
//         console.log('Porfavor colocar as informações corretas!!')
//     }
// }

const form = document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    if (email === 'adm@gmail.com' && senha === 'Adm123@') {
        window.location.href = './dashboard.html'
    } else {
        alert('Por favor, coloque as informações corretas!!')
    }
})



icone.addEventListener('click', ()=>{
    if (senha.type === 'password') {
        senha.type = 'text';
        icone.classList.replace('bx-lock', 'bx-lock-open')
    } else {
        senha.type = 'password';
        icone.classList.replace('bx-lock-open', 'bx-lock')
    }
})