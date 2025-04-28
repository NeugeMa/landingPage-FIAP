// Barra de Navegação
document.addEventListener("scroll", () => {
    const progressBar = document.querySelector(".progress");
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / documentHeight) * 100;

    progressBar.style.width = `${scrollPercentage}%`;
});

// ------------------------------------------------------------- //
// Animação Fade-In
window.addEventListener('load', () => {
    // Seleciona todos os elementos com a classe 'fade-in'
    const fadeInElements = document.querySelectorAll('.fade-in');

    // Adiciona a classe 'show' para ativar a animação
    fadeInElements.forEach((element) => {
        element.classList.add('show');
    });
});

// ------------------------------------------------------------- //
// Criação - Scroll Down 
const scrollButton = document.querySelector('.scroll-down');

// Adiciona o evento de clique
scrollButton.addEventListener('click', (event) => {
    event.preventDefault(); 

    // Sessão de destino
    const targetSection = document.querySelector('#educacao');

    // Rolamento suave 
    targetSection.scrollIntoView({
        behavior: 'smooth', 
        block: 'start' 
    });
});

// Criação - Scroll Up
const scrollUpButton = document.querySelector('.scroll-up');

scrollUpButton.addEventListener('click', (event) => {
    event.preventDefault();

    // Sessão de destino
    const targetSection = document.querySelector('#header');

    // Rolamento suave
    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});



// ------------------------------------------------------------- //
// Criação Modal 
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close-modal');
const inlineImage = document.querySelector('.inline-image');

// Abre o modal ao clicar na imagem
inlineImage.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = inlineImage.src; // Define a imagem no modal
});


// Fecha o modal ao clicar fora da imagem
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// ---------------------------------------------------------------- //
// Função para abrir/ fechar Modal 
function toggleContent() {
    const extraContent = document.getElementById('extraContent');
    if (extraContent.style.display === 'none' || extraContent.style.display === '') {
        extraContent.style.display = 'block'; // Mostra o conteúdo
    } else {
        extraContent.style.display = 'none'; // Oculta o conteúdo
    }
}