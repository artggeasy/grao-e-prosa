function formatar(valor) {
    return "R$ " + valor.toFixed(2).replace(".", ",");
}

function simularCompra() {
    const precoEspresso = 6;
    const precoCappuccino = 12;
    const precoPao = 5;

    const qtdEspresso = Number(prompt("Quantos Espressos (R$ 6,00) você quer?"));
    const qtdCappuccino = Number(prompt("Quantos Cappuccinos (R$ 12,00) você quer?"));
    const qtdPao = Number(prompt("Quantos Pães de queijo (R$ 5,00) você quer?"));

    // Validar as respostas
    if (!Number.isInteger(qtdEspresso) || qtdEspresso < 0 ||
        !Number.isInteger(qtdCappuccino) || qtdCappuccino < 0 ||
        !Number.isInteger(qtdPao) || qtdPao < 0) {
        alert("Digite apenas números inteiros maiores ou iguais a 0.");
        return;
    }

    //Nenhum produto selecionado
    if (qtdEspresso === 0 && qtdCappuccino === 0 && qtdPao === 0) {
        alert("Nenhum produto foi selecionado.");
        return;
    }

    //Subtotais e total
    const subtotalEspresso = precoEspresso * qtdEspresso;
    const subtotalCappuccino = precoCappuccino * qtdCappuccino;
    const subtotalPao = precoPao * qtdPao;
    const total = subtotalEspresso + subtotalCappuccino + subtotalPao;

    //Desconto de 10% para compras a partir de R$ 50,00
    let desconto = 0;
    if (total >= 50) {
        desconto = total * 0.10;
    }
    const totalFinal = total - desconto;

    //Resultado
    alert(
        "RESUMO DA COMPRA\n\n" +
        "Espresso: " + qtdEspresso + " un. = " + formatar(subtotalEspresso) + "\n" +
        "Cappuccino: " + qtdCappuccino + " un. = " + formatar(subtotalCappuccino) + "\n" +
        "Pão de queijo: " + qtdPao + " un. = " + formatar(subtotalPao) + "\n\n" +
        "Subtotal: " + formatar(total) + "\n" +
        "Desconto: " + formatar(desconto) + "\n" +
        "TOTAL: " + formatar(totalFinal)
    );
}