# ☕ Grão & Prosa — Simulador de Compras

**Projeto:** Desafio 1 — Minha Loja: Simulador de Compras
**Aluno:** Arthur
**Trilha:** (preencher com o nome da sua trilha)

---

## 🏪 Sobre a loja

A **Grão & Prosa** é uma cafeteria fictícia que eu criei para este desafio. A ideia foi montar uma página bonitinha, com cara de cafeteria (tons de marrom e creme), onde dá pra ver os produtos e simular uma compra usando JavaScript.

### Produtos e preços

| Produto | Descrição | Preço |
|---|---|---|
| Espresso | Café forte e encorpado | R$ 6,00 |
| Cappuccino | Café com leite vaporizado e canela | R$ 12,00 |
| Pão de queijo | Quentinho, vendido por unidade | R$ 5,00 |

### Regra de desconto

Se o total da compra for **R$ 50,00 ou mais**, a pessoa ganha **10% de desconto**.

---

## 🖼️ Captura de tela

![Captura de tela da página da Grão & Prosa](assets/captura-de-tela.png)

---

## 🛠️ Tecnologias

- **HTML5** — estrutura da página
- **CSS3** — visual e organização dos cards (Flexbox)
- **JavaScript** — a simulação da compra (`prompt`, `Number`, `alert`)

## ▶️ Como executar

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` no navegador (dois cliques nele já funciona).
3. Clique em **"Simular compra"**.
4. Digite a quantidade de cada produto (use `0` se não quiser levar).
5. Veja o resumo da compra na tela.

Não precisa instalar nada.

---

## 📁 Estrutura do projeto

```
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── captura-de-tela.png
```

---

## ✅ Testes realizados

| Espresso | Cappuccino | Pão | Resultado esperado | Funcionou? |
|---|---|---|---|---|
| 1 | 1 | 1 | Total R$ 23,00, sem desconto | ✅ |
| 0 | 0 | 0 | "Nenhum produto foi selecionado" | ✅ |
| 5 | 2 | 3 | Subtotal R$ 69,00, desconto R$ 6,90, total R$ 62,10 | ✅ |
| 0 | 0 | 10 | Subtotal R$ 50,00, desconto R$ 5,00, total R$ 45,00 (testa o limite do desconto) | ✅ |
| abc | — | — | Mensagem de erro pedindo número inteiro | ✅ |

---

## 😅 Dificuldade encontrada e o que aprendi

No começo eu não sabia como montar a estrutura do HTML nem por onde começar o JavaScript. A parte que mais me deu trabalho foi entender como validar as respostas do `prompt()`, porque ele sempre devolve **texto**, mesmo quando a pessoa digita um número. Foi aí que entendi pra que serve o `Number()` e por que ele pode devolver `NaN` quando a pessoa digita letras.

O que eu aprendi:

- Que o `prompt()` devolve texto e que preciso converter com `Number()` antes de fazer conta.
- Que dá pra usar `if` com `&&` (e) e `||` (ou) para checar várias condições de uma vez.
- Que o botão não pode ficar dentro de uma `<ul>`, porque a lista só aceita `<li>`.

---

## 🤖 Como usei IA neste projeto

Usei o **Claude (IA da Anthropic)** como um professor particular, e não só pra copiar código. Foi assim que ele me ajudou:

**1. Ideia da loja.** Eu pedi ajuda pra escolher o tema e ele sugeriu a cafeteria, o nome "Grão & Prosa", os três produtos, os preços e a regra de desconto de 10% a partir de R$ 50,00. Como o enunciado não explicava a regra do desconto, essa sugestão me ajudou a decidir.

**2. HTML sem encher de `div`.** Eu aprendi que não preciso criar um monte de `<div>` para organizar a página. Existem tags com significado, como `<header>`, `<main>`, `<article>`, `<section>` e `<footer>`. Elas deixam o código mais organizado, mais fácil de entender e ainda ajudam a acessibilidade (leitores de tela). Também fica mais fácil estilizar no CSS.

**3. O `:root` no CSS.** Eu não conhecia o `:root`. Ele serve pra guardar valores que vou usar em vários lugares, como as cores.

**4. Dar nome às cores, em vez de repetir o `#`.** No `:root` eu criei variáveis como `--marrom`, `--caramelo` e `--creme`. Depois, no resto do CSS, uso `var(--marrom)` em vez de escrever o código da cor toda hora. O `#` aparece só uma vez, na hora de criar a variável. Se eu quiser mudar uma cor, troco num lugar só e a página inteira muda.

**5. JavaScript.** A IA me deu o código da função `simularCompra()` e explicou cada parte (validação, desconto, `toFixed`, `replace`, etc.).

### O que eu adaptei

- Escolhi o estilo visual (marrom e creme) e conferi as cores no navegador.
- Mudei textos, descrições e o rodapé para ficarem do meu jeito.
- Corrigi o meu HTML depois da revisão (o botão estava dentro da lista e o rodapé precisava de ajuste).

### Como verifiquei se estava certo

- Abri a página no navegador e testei os cenários da tabela acima.
- Conferi as contas na mão (por exemplo, 5 × 6 + 2 × 12 + 3 × 5 = 69, e 10% de 69 = 6,90).
- Usei o **Console do navegador (F12)** pra procurar erros.
- Li o código linha por linha até entender o que cada parte faz.

---

Feito por **Arthur** 💻☕
