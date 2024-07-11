window.addEventListener('keydown', event => {
  const inputPeso = document.getElementById('peso');
  
  if(event.ctrlKey && event.key == 'i') {
    inputPeso.focus();
  }

  if(event.key == 'Enter') {
    exibirCalculo();
  }

  if(event.key == 'Escape') {
    fechar();
  }
})

const inputPeso = document.getElementById('peso');
const inputAltura = document.getElementById('altura');

function calcularIMC(peso, altura) {
  if(peso && altura) {
    return (peso / (altura ** 2)).toFixed(1);
  } else {
    return 0;
  }
}

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

function exibirCalculo() {
  let telaCalculo = document.getElementById('card-calculo');
  let telaResultado = document.getElementById('telaResultado');
  let corpoTabela = document.getElementById('corpo-tabela');
  let novaLinha = document.createElement('tr');
  let resultadoIMC = document.createElement('td');
  let resultadoClassificacao = document.createElement('td');
  let valorIMC = calcularIMC(inputPeso.value, inputAltura.value).toFixed(1);
  let classificacaoIMC = classificarIMC(valorIMC);

  corpoTabela.innerHTML = '';
  resultadoIMC.textContent = valorIMC;
  resultadoClassificacao.textContent = classificacaoIMC;
  novaLinha.appendChild(resultadoIMC);
  novaLinha.appendChild(resultadoClassificacao);
  corpoTabela.appendChild(novaLinha);
  telaResultado.style.display = 'block';
  telaCalculo.style.opacity = '0.5';
}

function fechar() {
  document.getElementById('telaResultado').style.display = 'none';
  document.getElementById('peso').value = '';
  document.getElementById('altura').value = '';
  document.getElementById('card-calculo').style.opacity = '1';
}

//Exemplos de cálculos
function calcularExemplo(peso, altura) {
  const valorIMC = calcularIMC(peso, altura);
  const classificacaoIMC = classificarIMC(valorIMC);
  console.log(`IMC: ${valorIMC} -- Classificação: ${classificacaoIMC}`);
}
calcularExemplo(55, 1.8);
calcularExemplo(60, 1.8);
calcularExemplo(90, 1.8);
calcularExemplo(100, 1.8);
