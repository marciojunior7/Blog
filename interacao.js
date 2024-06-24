// Adiciona um evento de clique ao botão para abrir o formulário
document.getElementById('AbrirBotao').addEventListener('click', function() {
    document.getElementById('postFormBg').style.display = 'flex';
});

// Adiciona um evento de clique ao botão para fechar o formulário com confirmação
document.getElementById('closeFormBtn').addEventListener('click', function() {
    if (confirm("Você tem certeza que deseja sair? As mudanças não serão salvas.")) {
        document.getElementById('postFormBg').style.display = 'none';
    }
});

// Fecha o formulário quando o usuário clica fora dele com confirmação
document.getElementById('postFormBg').addEventListener('click', function(event) {
    if (event.target === this) {
        if (confirm("Você tem certeza que deseja sair? As mudanças não serão salvas.")) {
            document.getElementById('postFormBg').style.display = 'none';
        }
    }
});

// Adiciona um evento de envio ao formulário para mostrar uma mensagem de confirmação
document.getElementById('postFormContent').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    alert("Seu post foi publicado!");
    document.getElementById('postFormBg').style.display = 'none'; // Fecha o formulário pop-up
    this.reset(); // Reseta o formulário
});
