const cards = document.querySelectorAll(".filme");
const resumo = document.getElementById("resumo");

function atualizarResumo() {
    let qtd = 0;
    let soma = 0;
    cards.forEach((card) => {
        if (card.dataset.nota) {
            qtd++;
            soma += Number(card.dataset.nota);
        }
    })
    resumo.textContent = `${qtd} de ${cards.length} avaliados`;
    if (qtd > 0) {
        resumo.textContent += ` - média ${(soma / qtd).toFixed(1)}`;
    }
}

cards.forEach((card) => {
    const controle = card.querySelector("input");

    controle.oninput = () => {
        card.dataset.nota = controle.value;
        card.querySelector(".nota").textContent = `Sua nota: ${controle.value} de 5`;
        atualizarResumo();
    }
})