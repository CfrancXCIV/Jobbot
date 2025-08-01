window.addEventListener('DOMContentLoaded', () => {
    const data = [
        { pergunta: 'O que é homeostase?', resposta: 'Processo de manutenção do equilíbrio interno do corpo.' },
        { pergunta: 'Qual a função dos glóbulos vermelhos?', resposta: 'Transportar oxigênio no sangue.' },
        { pergunta: 'Onde ocorre a troca gasosa?', resposta: 'Nos alvéolos pulmonares.' },
        { pergunta: 'Qual a principal célula de defesa do organismo?', resposta: 'Os leucócitos.' },
        { pergunta: 'O que é pressão arterial?', resposta: 'Força que o sangue exerce contra as paredes das artérias.' },
        { pergunta: 'Qual vitamina é essencial para a coagulação?', resposta: 'Vitamina K.' }
    ];

    const container = document.querySelector('.flashcards');
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'flashcard';
        card.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-front">${item.pergunta}</div>
                <div class="flashcard-back">${item.resposta}</div>
            </div>`;
        container.appendChild(card);
    });

    container.addEventListener('click', e => {
        const card = e.target.closest('.flashcard');
        if (card) {
            card.classList.toggle('is-flipped');
        }
    });
});
