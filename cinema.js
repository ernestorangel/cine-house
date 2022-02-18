let catalogo = require("./database/catalogo.json")

const cinema = "Cinema do Ernesto"

let novoFilme = {
  codigo: 865,
  titulo: "Catch Me If You Can",
  duracao: 141,
  atores: ["Leonardo DiCaprio", "Tom Hanks"],
  anoDeLancamento: 2002,
  emCartaz: false
}

function mostrarFilme(filmeObject) {

  let message = ""

  for (let prop in filmeObject) {

    let novaLinhaDeMensagem = "\n" + prop + ": " + filmeObject[prop]

    message = message + novaLinhaDeMensagem

  }

  return console.log(message)

}

function mensagemParaUsuario(statusCode) {

  switch(statusCode) {

    case 1:

      console.log("\nOperação realizada com sucesso.")

      break;

    case 2:

      console.log("\nErro durante a execução do programa.")

      break;

    default:

      console.log("\nMensagem padrão.")

  }

}

function adicionarFilme(novoFilme) {

  catalogo.push(novoFilme)

  mensagemParaUsuario(1)

}

function buscarFilme(codigo) {

  let filmeEncontrado = catalogo.find((filme) => filme.codigo === codigo)

  if (!filmeEncontrado) {

    return mensagemParaUsuario(2)

  } else {

    return mostrarFilme(filmeEncontrado)

  }

}

function alterarStatusEmCartaz(codigo) {

  let filmeEncontrado = catalogo.find((filme) => filme.codigo === codigo)

  let indexDoFilme = catalogo.indexOf(filmeEncontrado)

  filmeEncontrado === undefined ? mensagemParaUsuario(2) : (catalogo[indexDoFilme].emCartaz = !catalogo[indexDoFilme].emCartaz, mensagemParaUsuario(1))

}

function listarTodosOsFilmes() {

  catalogo.forEach(
    
    function imprimir(filme) {
    
      mostrarFilme(filme)

    }
  
  )

}

function listarFilmesEmCartaz() {

  let filmesEmCartaz = catalogo.filter(

    function testeEmCartaz(filme) {

      return filme.emCartaz

    }

  )

  filmesEmCartaz.forEach(
    
    function imprimir(filme) {
    
      mostrarFilme(filme)

    }
  
  )
 
}

function listarFilmesDeLongaDuracao() {

  let filmesDeLongaDuracao = catalogo.filter(

    function testeLongaDuracao(filme) {

      return filme.duracao >= 120

    }

  )

  filmesDeLongaDuracao.forEach(
    
    function imprimir(filme) {
    
      mostrarFilme(filme)

    }
  
  )

}

adicionarFilme(novoFilme)

buscarFilme(324)

alterarStatusEmCartaz(784)

listarTodosOsFilmes()

listarFilmesEmCartaz()

listarFilmesDeLongaDuracao()
