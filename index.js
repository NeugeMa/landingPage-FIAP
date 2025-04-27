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