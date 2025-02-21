
document.querySelectorAll('.aba').forEach(aba => {
    aba.addEventListener('click', (e) => {
        e.preventDefault(); // Evita o comportamento padrão do link
        alert(`Você clicou na aba: ${aba.querySelector('p').textContent}`);
        // Redireciona para a página após um pequeno delay (opcional)
        setTimeout(() => {
            window.location.href = aba.getAttribute('href');
        }, 300);
    });
});