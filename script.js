const tabela = [
  { tamanho: "12x18 + 3ABA", p10: 31.59, p20: 29.49, p50: 27.64, peso: 1.7 },
  { tamanho: "15x25 + 3ABA", p10: 53.66, p20: 50.08, p50: 46.95, peso: 3.0 },
  { tamanho: "19x25 + 3ABA", p10: 67.98, p20: 63.45, p50: 59.48, peso: 3.4 },
  { tamanho: "20x30 + 3ABA", p10: 85.06, p20: 79.39, p50: 74.43, peso: 4.5 },
  { tamanho: "22x40 + 3ABA", p10: 123.26, p20: 115.04, p50: 107.85, peso: 6.8 }
];

// Preenche o select de tamanhos
const select = document.getElementById("tamanho");
tabela.forEach(item => {
  const option = document.createElement("option");
  option.value = item.tamanho;
  option.textContent = item.tamanho;
  select.appendChild(option);
});

// Preenche a tabela de preços no front
const tabelaHTML = document.getElementById("tabelaPrecos");
tabela.forEach(item => {
  const linha = document.createElement("tr");
  linha.innerHTML = `
    <td>${item.tamanho}</td>
    <td>R$ ${item.p10.toFixed(2)}</td>
    <td>R$ ${item.p20.toFixed(2)}</td>
    <td>R$ ${item.p50.toFixed(2)}</td>
    <td>${item.peso}</td>
  `;
  tabelaHTML.appendChild(linha);
});

// Função de cálculo
function calcular() {
  const tamanho = document.getElementById("tamanho").value;
  const milheiros = Number(document.getElementById("quantidade").value);

  if (!tamanho || milheiros <= 0) {
    alert("Selecione o tamanho e informe a quantidade em milheiros");
    return;
  }

  const item = tabela.find(i => i.tamanho === tamanho);

  let preco;
  if (milheiros <= 10) preco = item.p10;
  else if (milheiros <= 20) preco = item.p20;
  else preco = item.p50;

  const valorTotal = preco * milheiros;
  const pesoTotal = item.peso * milheiros;

  document.getElementById("valor").innerText =
    "R$ " + valorTotal.toFixed(2);

  document.getElementById("peso").innerText =
    pesoTotal.toFixed(2) + " kg";
}
