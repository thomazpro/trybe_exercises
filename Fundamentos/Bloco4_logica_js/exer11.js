function inss (salarioBruto) {

  let salarioDeduzido = 0;

  if (salarioBruto != null && salarioBruto > 0) {

    if (salarioBruto <= 1556.94) {
  
      salarioDeduzido = salarioBruto * 0.92;
  
    } else if (salarioBruto >= 1556.94 && salarioBruto <= 2594.92) {
      
      salarioDeduzido = salarioBruto * 0.91;
  
    } else if (salarioBruto >= 2594.92 && salarioBruto <= 5189.82) {
      
      salarioDeduzido = salarioBruto * 0.89;
  
    } else {
      
      salarioDeduzido = salarioBruto - 570.88;
  
    }
  

  }

 
  return salarioDeduzido;
}

function ir(salarioDeduzido) {

  let salarioLiquido = 0;

  if (salarioDeduzido != null && salarioDeduzido > 0) {

    if (salarioDeduzido <= 1903.98) {
  
      salarioLiquido = salarioDeduzido;
  
    } else if (salarioDeduzido >= 1903.98 && salarioDeduzido <=  2826.65) {

      salarioLiquido = salarioDeduzido - ((salarioDeduzido * 0.075) - 142.80);

    } else if (salarioDeduzido >= 2826.66 && salarioDeduzido <= 3751.05 ) {
      
      salarioLiquido = salarioDeduzido - ((salarioDeduzido * 0.15) - 354.80);
  
    } else if (salarioDeduzido >= 3751.06 && salarioDeduzido <= 4664.68 ) {

      salarioLiquido = salarioDeduzido - ((salarioDeduzido * 0.225) - 636.13);
    
    } else {

      salarioLiquido = salarioDeduzido - ((salarioDeduzido * 0.275) - 869.36);
  
    }

  return salarioLiquido;

  }

    
}

function salarioLiquido (salarioBruto) {
  return ir(inss(salarioBruto));
}

console.log(salarioLiquido(1000000));