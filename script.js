document.addEventListener('DOMContentLoaded', function() {
    // 1. Efeito de rolagem suave para links de navegação
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Mensagem de feedback ao clicar no botão CTA
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Ótima escolha! Comece sua jornada de estilo agora.');
        });
    }

    // 3. Adicionar uma mensagem dinâmica no rodapé
    const footerMessage = document.getElementById('footer-message');
    if (footerMessage) {
        const now = new Date();
        const hour = now.getHours();
        let greeting;

        if (hour < 12) {
            greeting = 'Bom dia! Comece o dia com estilo.';
        } else if (hour < 18) {
            greeting = 'Boa tarde! Inspire-se para o seu próximo look.';
        } else {
            greeting = 'Boa noite! O estilo nunca dorme.';
        }

        footerMessage.textContent = greeting;
    }

    // 4. Efeito de destaque ao passar o mouse sobre os cards de conteúdo
    const contentCards = document.querySelectorAll('.card');
    contentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#FFFACD'; // Cor amarela clara ao passar o mouse
        });
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'var(--light-text-color)'; // Volta à cor original (branco)
        });
    });

    // 5. Funcionalidade de compra para os botões de produto
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            alert(`Produto "${productName}" adicionado ao carrinho! (Funcionalidade de compra simulada)`);
        });
    });

    // 6. Mensagem ao clicar nas categorias (simulação)
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const categoryName = this.textContent;
            alert(`Você clicou na categoria: ${categoryName}. Aqui você veria produtos e artigos relacionados a este estilo de vida.`);
        });
    });
});
