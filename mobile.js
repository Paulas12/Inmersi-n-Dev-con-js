var valorEnDolar = 155.5;
var cotizacionEnPesos = 16.893; 
var valorEnPesos = valorEnDolar + cotizacionEnPesos; 
console.log(valorEnPesos); /*el cogido original tenia alert en vez de console.log ya que se estuvo trabajando en codepen que es un entorno del navegador y vscode es un entorno de servidor por lo cual Node.js no lo tiene disponible */
valorEnPesos = valorEnPesos.toFixed(2); /*el metodo toFixed()redondea los numeros grandes*/
console.log(valorEnPesos);