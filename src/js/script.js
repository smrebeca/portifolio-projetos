/*const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

btnMostrarProjetos.addEventListener('click', () => {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });

    btnMostrarProjetos.classList.add('remover');
});*/

const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

let projetosVisiveis = false;

btnMostrarProjetos.addEventListener('click', () => {
    projetosInativos.forEach(projetoInativo => {
        if (!projetosVisiveis) {
            projetoInativo.classList.add('ativo');
            btnMostrarProjetos.textContent = 'Mostrar menos projetos';
        } else {
            projetoInativo.classList.remove('ativo');
            btnMostrarProjetos.textContent = 'Mostrar mais projetos';
        }
    });

    projetosVisiveis = !projetosVisiveis;
});