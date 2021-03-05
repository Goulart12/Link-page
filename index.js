const lightMode = document.querySelector('#light-mode');

lightMode.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode')
})
    
/*lightMode.addEventListener('click', () => {
    document.getElementById('img').src = "./assets/darkness-dark.png";
})*/

document.addEventListener("touchstart", alterarMobile)
document.addEventListener("touchmove", alterarMobile)

function alterarMobile() {
    document.documentElement.classList.toggle('dark-mode')
}

function alterarImagem() {
    document.getElementById('img').src = "./assets/darkness-dark.png";
}
