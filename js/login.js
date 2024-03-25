'use strict'

const form = document.getElementById('form')
const email = document.getElementById('email')
const senha = document.getElementById('senha');
const icone = document.getElementById('icone');
const logar = document.getElementById('logar')
const vip = document.getElementById('vip')


logar.addEventListener('click', ()=>{
    window.location.href = '../index.html'
})

vip.addEventListener('click', ()=>{
    alert('Parabens você tornou-se ADM!! Não se esqueça dessas informações!! Email: adm@gmail.com, Senha: Adm123@')

    vip.classList.add('bg-[#ECDDA2]')
    vip.classList.add('text-[#19191A]')
    
})


icone.addEventListener('click', ()=>{
    if (senha.type === 'password') {
        senha.type = 'text';
        icone.classList.replace('bx-lock', 'bx-lock-open');
    } else {
        senha.type = 'password';
        icone.classList.replace('bx-lock-open', 'bx-lock');
    }
})
