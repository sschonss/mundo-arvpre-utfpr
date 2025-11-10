export interface Localizacao {
    continente: string;
    pais?: string | null;
    cidade?: string | null;
}

export class Mundo2 {
    mundo: any[] = [];

    public adicionar(localizacao: Localizacao): void {
        const { continente, pais, cidade } = localizacao;
        const continenteObj = this.obterOuCriarElemento(this.mundo, continente, 'paises');

        if (pais) {
            const paisObj = this.obterOuCriarElemento(continenteObj.paises, pais, 'cidades');
            if (cidade) {
                this.adicionarSeNaoExistir(paisObj.cidades, cidade);
            }
        }
    }

    private obterOuCriarElemento(lista: any[], nome: string, propriedadeFilha: string): any {
        let elemento = this.encontrarElementoPorNome(lista, nome);
        if (!elemento) {
            elemento = { nome, [propriedadeFilha]: [] };
            lista.push(elemento);
        }
        return elemento;
    }

    private adicionarSeNaoExistir(lista: any[], nome: string): void {
        if (this.encontrarElementoSimples(lista, nome) === -1) {
            lista.push(nome);
        }
    }

    private encontrarElementoPorNome(lista: any[], nome: string): any | undefined {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i] && lista[i].nome === nome) {
                return lista[i];
            }
        }
        return undefined;
    }

    private encontrarElementoSimples(lista: any[], nome: string): number {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i] === nome) {
                return i;
            }
        }
        return -1;
    }

    public exibirArvoreFormatada(): any[] {
        return this.mundo;
    }
}
