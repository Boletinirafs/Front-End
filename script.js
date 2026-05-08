alert("Bem vindo ao Drip\nUsuário = agostinho\nsenha = carrara\nShhhh, é segredo")

//Função para fazer o login pelo prompt
const usuario = "agostinho"
const senha = "carrara"

const loginButton = document.querySelector(".login")
loginButton.addEventListener('click',()=>{
    let nome = prompt("digite seu nome")
    if (nome === "agostinho"){
        let senha = prompt("Digite a senha")
        if (senha === "carrara"){
            const userName = document.querySelector(".login p")
            console.log(userName)
            userName.innerHTML = "Bem vindo, Agostinho!"
            userName.className = "p"

        }else{
            alert("senha incorreta")
        }
    }else{
        alert("Nome incorreto")
    }
})

//Função para rodar as imagens pelo src
const images = [
    ".images/Agostinho1.webp",
    ".images/Agostinho2.jpg",
    ".images/Agostinho3.jpg",
    ".images/agostinhoCelular.webp",
]
let carousel = document.querySelector(".slideShow img")
let index = 3
carousel.addEventListener('click',()=>{
    if(carousel.getAttribute('src') == images[3]){
        carousel.setAttribute('src',images[0])
        index = 0
    }else{
        index += 1
        carousel.setAttribute('src',images[index])
    }
})

//Função desnecessária pelo amor ao jogo
const prankButton = document.querySelector(".pictureSwitch")
prankButton.addEventListener('click',()=>{
    alert("Eu falei que era pra clicar na foto")
})

//Função para aumentar a quantidade de agostinhos
const augustIncreaser = document.querySelector('.augButton')
let augustCounter = document.querySelector('ul')
let count = 1
augustIncreaser.addEventListener('click',()=>{
    let li = document.createElement('li')
    if(count === 1){
        li.textContent = `${count} agostinho`
        augustCounter.appendChild(li)
        count += 1
    }else if(count == 21){
        alert('20 já tá bom demais')
    }else{
        li.textContent = `${count} agostinhos`
        augustCounter.appendChild(li)
        count += 1
    }
})


