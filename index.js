const lightMode = document.querySelector('#light-mode');

lightMode.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode')
})

const mobileBtn = document.querySelector('#mobileButton');

mobileBtn.addEventListener('touchstart', () => {
    document.documentElement.classList.toggle('dark-mode');
    document.getElementById('img').src = "./assets/darkness-dark.png";
})

    
/*lightMode.addEventListener('click', () => {
    document.getElementById('img').src = "./assets/darkness-dark.png";
})*/


function alterarImagem() {
    document.getElementById('img').src = "./assets/darkness-dark.png";
}



