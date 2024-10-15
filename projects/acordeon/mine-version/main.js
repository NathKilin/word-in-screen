const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const btn = item.querySelector('.more-about-btn'); // Seleciona o botão de toggle
    const answer = item.querySelector('.faq-answer'); // Seleciona a resposta
    const question = item.querySelector('.faq-question'); // Seleciona a pergunta

    function toggleFAQ() {
        const isExpanded = question.getAttribute('aria-expanded') === 'true';
        question.setAttribute('aria-expanded', !isExpanded);
    
        if (isExpanded) {
            answer.style.maxHeight = '0';
            answer.style.padding = '0';
            btn.textContent = '+';
        } else {
            answer.style.maxHeight = `${answer.scrollHeight + 10}px`; // Adiciona um pequeno espaço extra
            answer.style.padding = '10px 0';
            btn.textContent = '-';
        }
    }

    // Adiciona eventos de clique no botão e na pergunta
    btn.addEventListener('click', toggleFAQ);
    question.addEventListener('click', toggleFAQ);

    // Corrige problemas de transição ao recarregar a página (altura inicial)
    if (question.getAttribute('aria-expanded') === 'true') {
        answer.style.maxHeight = `${answer.scrollHeight}px`; // Garante que o conteúdo aberto tenha altura correta
    }
});
