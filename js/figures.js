//Taller 1 figuras geométricas

// Primer paso: Definir las formulas
// Segundo pase: Implementar las formulas en JS
// Tercer paso: Crear funciones 
// Integrar JavaScript con HTML

//SQUARE CODE//


console.group('Cuadrado');

//const ladoCuadrado = 5; 

function perimetroCuadrado (lado){
  return lado* 4;
}


function areaCuadrado (lado) {
  return lado * lado
}


console.groupEnd();

//TRIANGLE  CODE//

console.group('Triangulo');

//const ladoTriangulo1 = 6; 
//const ladoTriangulo2 = 6; 
//const baseTriangulo = 4; 

// console.log(`Los lados del triangulo miden:
// ${ladoTriangulo1} cms,
// ${ladoTriangulo2} cms,
// ${baseTriangulo} cms`);

// const alturaTriangulo = 5.5; 


function perimetroTriangulo (lado1, lado2, base) {
  return lado1 + lado2 + base
}


function areaTriangulo (base, altura) {
  return (base * altura) / 2
}

console.groupEnd();

//CIRCLE  CODE//

console.group('Circle');

//Radio
// const radioCirculo = 4;

//Diametro

function diametroCirculo (radio){
  return radio * 2
}

//PI 
const PI = Math.PI

//Circunferencia

function perimetroCirculo (radio){
  const diametro = diametroCirculo (radio);
  return diametro * PI
}

//Area 

function areaCirculo (radio){
  return (radio * radio) * PI 
}

console.groupEnd();

//INTERACTUANDO CON EL HTML 

function calcularPerimetroCuadrado (){
  const input = document.getElementById('inputCuadrado');
  const value = input.value;

  const perimetro = perimetroCuadrado  (value);
  alert(perimetro);
}

function calcularAreaCuadrado (){
  const input = document.getElementById('inputCuadrado');
  const value = input.value;

  const area = areaCuadrado (value);
  alert(area);
}