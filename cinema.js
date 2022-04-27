var catalogo = require("./database/catalogo.json");
// console.log(catalogo);
var catalogoString = JSON.stringify(catalogo);
// console.log(catalogoString);
var catalogoObj = JSON.parse(catalogoString);
// console.log(catalogoObj);

function listarTodosOsFilmes(filmes) {
  for (let i = 0; i < filmes.length; i++) {
    console.log(filmes[i].titulo);
  }
}
// listarTodosOsFilmes(catalogoObj.data);

// const listarFilmesEmCartaz = (filmes) =>
//   filmes.filter((filme) => filme.emCartaz);

function listarFilmesEmCartaz(filmes) {
  return filmes.filter((filme) => filme.emCartaz);
}
// console.log(listarFilmesEmCartaz(catalogoObj.data));

function alterarStatusEmCartaz(id, filmes) {
  const idxFilme = filmes.findIndex((filme) => {
    if (filme.codigo === id) {
      return true;
    }
  });
  if (idxFilme >= 0) {
    filmes[idxFilme].emCartaz = !filmes[idxFilme].emCartaz;
    return true;
  } else {
    return false;
  }
}

// console.log(alterarStatusEmCartaz(1, catalogoObj.data));
// console.log(catalogoObj.data);

function calcularDoisNumeros(calculador, num1, num2) {
  if (num1 > 5) {
    num1 = num1 + 2;
  } else {
    num1 = num1 + 5;
  }
  return calculador(num1, num2);
}
function somar(num1, num2) {
  return num1 + num2;
}
function multiplicar(num1, num2) {
  return num1 * num2;
}
const resultado = calcularDoisNumeros(multiplicar, 2, 4);
// console.log(resultado);
