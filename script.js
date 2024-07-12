//Pegar campos peso e altura
const inputPeso = document.getElementById('peso');
const inputAltura = document.getElementById('altura');

//Atalhos do teclado (campos da tela de cálculo)
window.addEventListener('keydown', event => {
  const inputPeso = document.getElementById('peso');
  //Focar campo "peso"
  if(event.ctrlKey && event.key == 'i') {
    inputPeso.focus();
  }
  //Ativar botão de cálculo
  if(event.key == 'Enter') {
    exibirCalculo();
  }
  //Fechar tela de resultado
  if(event.key == 'Escape') {
    fechar();
  }
})

//Cálculo do IMC
function calcularIMC(peso, altura) {
  if(peso && altura) {
    const resultado = (peso / (altura ** 2));
    return resultado.toFixed(1);
  } else {
    return 0;
  }
}

//Classificação do IMC
function classificarIMC(valorIMC) {
  if(valorIMC == 0) {
    return "Sem dados";
  } else if(valorIMC < 18.5) {
    return "Abaixo do peso.";
  } else if(valorIMC < 24.9) {
    return "Peso normal.";
  } else if(valorIMC < 29.9) {
    return "Sobrepeso.";
  } else if(valorIMC >= 30) {
    return "Obesidade.";
  }
}

//Exibição do cálculo na tela de resultado
function exibirCalculo() {
  //Pegar telas de cálculo, resultado e tabela
  let telaCalculo = document.getElementById('card-calculo');
  let telaResultado = document.getElementById('telaResultado');
  let corpoTabela = document.getElementById('corpo-tabela');
  //Criar nova linha na tabela com imc e classificação
  let novaLinha = document.createElement('tr');
  let resultadoIMC = document.createElement('td');
  let resultadoClassificacao = document.createElement('td');
  //Pegar resultado IMC
  let valorIMC = calcularIMC(inputPeso.value, inputAltura.value);
  //Pegar classificação IMC
  let classificacaoIMC = classificarIMC(valorIMC);

  //Limpar tabela imc (caso tenha cálculo anterior)
  corpoTabela.innerHTML = '';
  //Insere valores de cálculo e classificação nos elementos (cálculo/classificação)
  resultadoIMC.textContent = valorIMC;
  resultadoClassificacao.textContent = classificacaoIMC;
  //Insere cálculo e classificação na linha
  novaLinha.appendChild(resultadoIMC);
  novaLinha.appendChild(resultadoClassificacao);
  //Insere linha no corpo da tabela
  corpoTabela.appendChild(novaLinha);
  //Exibe tela de resultado
  telaResultado.style.display = 'block';
  //Diminui opacidade da tela de cálculo
  telaCalculo.style.opacity = '0.5';
}

//Fechar tela de resultado
function fechar() {
  //oculta tela de resultado
  document.getElementById('telaResultado').style.display = 'none';
  //Remove valores dos campos peso/altura
  document.getElementById('peso').value = '';
  document.getElementById('altura').value = '';
  //Restaura nitidez da tela de cálculo
  document.getElementById('card-calculo').style.opacity = '1';
}

//Exemplos de cálculos
function calcularExemplo(peso, altura) {
  const valorIMC = calcularIMC(peso, altura);
  const classificacaoIMC = classificarIMC(valorIMC);
  console.log(`IMC: ${valorIMC} -- Classificação: ${classificacaoIMC}`);
}
//Abaixo do peso
calcularExemplo(55, 1.8);
//Peso normal
calcularExemplo(60, 1.8);
//Sobrepeso
calcularExemplo(90, 1.8);
//Obesidade
calcularExemplo(100, 1.8);
