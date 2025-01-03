document.addEventListener('DOMContentLoaded', () => {
    console.log("Página inicial carregada!");

    // Verifica a preferência de modo do usuário e aplica automaticamente
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const modeToggleButton = document.getElementById('mode-toggle');
    
    // Aplica o tema baseado na preferência do usuário
    if (prefersDarkScheme) {
        document.body.classList.add('dark-mode');
        modeToggleButton.checked = true;  // Deixa o botão de alternância "ligado"
    } else {
        document.body.classList.add('light-mode');
        modeToggleButton.checked = false; // Deixa o botão de alternância "desligado"
    }

    // Evento de alternância de tema
    modeToggleButton.addEventListener('change', () => {
        if (modeToggleButton.checked) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    });
});

// Função para alternar entre dark mode e light mode
function toggleMode() {
    const body = document.body;
    const toggle = document.getElementById('mode-toggle');

    // Alternar a classe entre dark-mode e light-mode
    if (toggle.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
}

// Função para exibir a seção específica e ocultar as outras
function showSection(sectionId) {
    // Ocultar todas as seções
    document.querySelectorAll('.hidden-section').forEach(section => section.style.display = 'none');
    document.querySelector('#home').style.display = 'none';  // Ocultar a seção de boas-vindas

    // Exibir a seção clicada
    document.getElementById(sectionId).style.display = 'block';
}

// Função para voltar para a página inicial
function showHome() {
    // Ocultar todas as outras seções
    document.querySelectorAll('.hidden-section').forEach(section => section.style.display = 'none');
    
    // Exibir a seção inicial
    document.getElementById('home').style.display = 'flex';
}
