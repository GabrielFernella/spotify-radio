//Você deve alterar o conteudo desta funcao para processar as entradas de acordo.
function processarLinha(linha) {
  return linha;
}


function main() {
  const linhas = [
    4, 6, "item1 200", "item1 200", "item2 100", "item3 40", "item4 50", "item5 200", "item1 item5"
  ]

  let nClientes = Number(eval(linhas[0]))
  let nItens = Number(eval(linhas[1]))
  let itensFora = linhas.pop().split(" ")
  let totalValor = 0;
  let totalValorFora = 0;

  const newLinhas = linhas.slice(2)

  newLinhas.map(item => {
    let values = item.split(" ")

    totalValor += eval(values[1]);

    itensFora.map(item => {
      if (item === values[0]) {
        totalValorFora += eval(values[1]);
      }
    })

  })

  const valorSemAdicional = totalValor - totalValorFora;

  console.log(nClientes)
  console.log(nItens)
  console.log("Itens Fora: " + itensFora)
  console.log(newLinhas)
  console.log("Valor total: " + valorSemAdicional)
  console.log("Valor que cada cliente precisa pagar como resultado da divisão comum: " + (valorSemAdicional / nClientes))
  console.log("Vlor total resultante dos itens que não fizeram parte da divisão comum: " + totalValorFora)

}

main();
