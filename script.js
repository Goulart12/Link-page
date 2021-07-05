const checkbox = document.getElementById("checkbox");

checkbox.addEventListener('change', () => {
    document.documentElement.classList.toggle('dark-mode')
})