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

function formatarPalavra(palavra) {

  let listaDeIndicesDasMaiusculas = [0]

  for (let letra in palavra) {

    if (palavra[letra] == palavra[letra].toUpperCase()) {

      listaDeIndicesDasMaiusculas.push(letra)

    } 

  }

  let palavraFormatada

  if (listaDeIndicesDasMaiusculas.length > 1) {

    palavraFormatada = []

    for (let i = 0; i <= listaDeIndicesDasMaiusculas.length; i++) {

      if (i == 0) {

        continue

      } else {

        palavraIsolada = palavra.slice(listaDeIndicesDasMaiusculas[i - 1], listaDeIndicesDasMaiusculas[i])

      }

      palavraFormatada.push(palavraIsolada)

    }

    palavraFormatada = palavraFormatada.join(" ")

  } else {

    palavraFormatada = palavra

  }

  return palavraFormatada.charAt(0).toUpperCase() + palavraFormatada.slice(1)

}

function mostrarFilme(objetoFilme) {

  let mensagem = ""

  for (let propriedadeDoFilme in objetoFilme) {

    nomeDaPropriedade = formatarPalavra(propriedadeDoFilme)

    valorDaPropriedade = objetoFilme[propriedadeDoFilme]

    let novaLinhaDaMensagem = `\n${nomeDaPropriedade}: ${valorDaPropriedade}`

    mensagem = mensagem + novaLinhaDaMensagem

  }

  return console.log(mensagem)

}

function mensagemParaUsuario(codigoDeStatus) {

  switch(codigoDeStatus) {

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

function buscarFilme(codigoDoFilmeProcurado) {

  let filmeEncontrado = catalogo.find((filme) => filme.codigo === codigoDoFilmeProcurado)

  if (!filmeEncontrado) return mensagemParaUsuario(2)
  
  return mostrarFilme(filmeEncontrado)

}

function alterarStatusEmCartaz(codigo) {

  let filmeEncontrado = catalogo.find((filme) => filme.codigo === codigo)

  let indexDoFilme = catalogo.indexOf(filmeEncontrado)

  if (!filmeEncontrado) return mensagemParaUsuario(2)
  
  catalogo[indexDoFilme].emCartaz = !catalogo[indexDoFilme].emCartaz
    
  return mensagemParaUsuario(1)

}

function listarTodosOsFilmes() {

  catalogo.forEach((filme) => mostrarFilme(filme))

}

function listarFilmesEmCartaz() {

  let filmesEmCartaz = catalogo.filter((filme) => filme.emCartaz)

  filmesEmCartaz.forEach((filme) => mostrarFilme(filme))
 
}

function listarFilmesDeLongaDuracao() {

  let filmesDeLongaDuracao = catalogo.filter((filme) => filme.duracao >= 120)

  filmesDeLongaDuracao.forEach((filme) => mostrarFilme(filme))

}

adicionarFilme(novoFilme)

buscarFilme(324)

alterarStatusEmCartaz(784)

listarTodosOsFilmes()

listarFilmesEmCartaz()

listarFilmesDeLongaDuracao()
