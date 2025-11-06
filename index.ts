import {Mundo} from "./Mundo";

const mundo = new Mundo()

mundo.adicionar("América do Sul", "Brasil", "São Paulo")
mundo.adicionar("América do Sul", "Brasil", "Rio de Janeiro")
mundo.adicionar("América do Sul", "Argentina", "Buenos Aires")
mundo.adicionar("Europa", "Portugal", "Lisboa")
mundo.adicionar("Europa", "Espanha")
mundo.adicionar("Ásia")

console.log(JSON.stringify(mundo.exibirArvoreFormatada()))