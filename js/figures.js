//Taller 1 figuras geométricas

// Primer paso: Definir las formulas
// Segundo pase: Implementar las formulas en JS
// Tercer paso: Crear funciones 
// Integrar JavaScript con HTML

//SQUARE CODE//


console.group('Cuadrado');

const ladoCuadrado = 5; 
console.log(`Los lados del cuadrado miden ${ladoCuadrado} cms`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado miden ${perimetroCuadrado} cms`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado mide ${areaCuadrado} cms cuadrados`);

console.groupEnd();

//TRIANGLE  CODE//

console.group('Triangulo');

const ladoTriangulo1 = 6; 
const ladoTriangulo2 = 6; 
const baseTriangulo = 4; 

console.log(`Los lados del triangulo miden:
${ladoTriangulo1} cms,
${ladoTriangulo2} cms,
${baseTriangulo} cms`);

const alturaTriangulo = 5.5; 
console.log(`La altura del triangulo es de ${alturaTriangulo} cms`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro del triangulo es de ${perimetroTriangulo} cms`);

const areaTrianngulo = (baseTriangulo * alturaTriangulo) / 2
console.log(`El area del triangulo es de ${areaTrianngulo} cms`);

console.groupEnd();

//CIRCLE  CODE//

console.group('Circle');

//Radio
const radioCirculo = 4;
console.log(`El radio del circulo es de ${radioCirculo} cms`);
//Diametro
const diametroCirculo = radioCirculo * 2
console.log(`El diametro del circulo es de ${diametroCirculo} cms`);
//PI 
const PI = Math.PI

//Circunferencia
const perimetroCirculo =  diametroCirculo * PI
console.log(`El perimetro del circulo es de ${perimetroCirculo} cms`);
//Area 
const areaCirculo = (radioCirculo * radioCirculo) * PI 
console.log(`El area del circulo es de ${areaCirculo} cms`);
console.groupEnd();