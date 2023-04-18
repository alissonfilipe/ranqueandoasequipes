// Define o estado inicial da ordenação como "ascendente"
var estadoOrdenacao = "ascendente";

// Define a função que ordena a tabela com base na coluna selecionada
function ordenarTabela(coluna) {
  // Declara as variáveis necessárias
  var tabela, linhas, troca, i, x, y;

  // Seleciona a tabela pela ID
  tabela = document.getElementById("tabela");

  // Define a variável de controle da repetição como verdadeira
  troca = true;
  while (troca) {
    troca = false;

    // Obtém as linhas da tabela
    linhas = tabela.rows;

    // Percorre as linhas e compara o valor da coluna atual com o valor da próxima coluna
    for (i = 1; i < linhas.length - 1; i++) {
      // Obtém o valor da coluna atual e da próxima coluna
      x = linhas[i].getElementsByTagName("td")[coluna];
      y = linhas[i + 1].getElementsByTagName("td")[coluna];

      // Compara os valores das colunas, dependendo do estado de ordenação
      if (estadoOrdenacao == "ascendente") {
        if (isNaN(x.innerHTML)) {
          // Caso seja uma string, compara as strings em ordem alfabética
          if (
            x.innerHTML.toLowerCase().startsWith(filter.toLowerCase()) &&
            (y.innerHTML.toLowerCase().startsWith(filter.toLowerCase()) ||
              y.innerHTML.toLowerCase() > filter.toLowerCase())
          ) {
            linhas[i].parentNode.insertBefore(linhas[i + 1], linhas[i]);
            troca = true;
            break;
          }
        } else {
          // Caso seja um número, compara os números em ordem crescente
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            linhas[i].parentNode.insertBefore(linhas[i + 1], linhas[i]);
            troca = true;
            break;
          }
        }
      } else if (estadoOrdenacao == "descendente") {
        if (isNaN(x.innerHTML)) {
          // Caso seja uma string, compara as strings em ordem alfabética inversa
          if (
            x.innerHTML.toLowerCase().startsWith(filter.toLowerCase()) &&
            (y.innerHTML.toLowerCase().startsWith(filter.toLowerCase()) ||
              y.innerHTML.toLowerCase() < filter.toLowerCase())
          ) {
            linhas[i].parentNode.insertBefore(linhas[i + 1], linhas[i]);
            troca = true;
            break;
          }
        } else {
          // Caso seja um número, compara os números em ordem decrescente
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
            linhas[i].parentNode.insertBefore(linhas[i + 1], linhas[i]);
            troca = true;
            break;
          }
        }
      }
    }
  }

  // Altera o estado de ordenação após a conclusão da ordenação
  if (estadoOrdenacao == "ascendente") {
    estadoOrdenacao = "descendente";
  } else {
    estadoOrdenacao = "ascendente";
  }
}

// Define a função que filtra a tabela com base em um termo de busca
function filterTable() {
    // Declara as variáveis necessárias
    var input, filter, tabela, linhas, coluna, conteudo;
    
    // Obtém o elemento de entrada de busca e o converte em maiúsculas
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    
    // Obtém a tabela e suas linhas
    tabela = document.getElementById("tabela");
    linhas = tabela.getElementsByTagName("tr");
    
    // Loop pelas linhas da tabela
    for (var i = 0; i < linhas.length; i++) {
    // Obtém a coluna 2 de cada linha
    coluna = linhas[i].getElementsByTagName("td")[2];
    if (coluna) {
    // Obtém o conteúdo da coluna em formato de texto
    conteudo = coluna.textContent || coluna.innerText;
    // Compara o conteúdo com o termo de busca e ajusta o estilo de exibição da linha
    if (conteudo.toUpperCase().startsWith(filter)) {
    linhas[i].style.display = "";
    } else {
    linhas[i].style.display = "none";
    }
    }
    }
    }