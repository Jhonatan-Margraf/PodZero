// Adiciona funcionalidade de rolagem suave para o botão "Começar"
document.getElementById('cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.getElementById('curto-prazo');
    targetSection.scrollIntoView({ behavior: 'smooth' });
});

// Funcionalidade do Acordeão (Mitos e Verdades)
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }
    });
});

// Animações de Scroll-Reveal
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('[data-animation]').forEach(el => {
    observer.observe(el);
});