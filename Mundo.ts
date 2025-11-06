export class Mundo {
    mundo: any[] = [];

    public adicionar(continente: string, pais?: string, cidade?: string): void {
        const continenteObj = this.obterOuCriarElemento(this.mundo, continente, 'paises');

        if (pais) {
            const paisObj = this.obterOuCriarElemento(continenteObj.paises, pais, 'cidades');

            if (cidade) {
                this.adicionarSeNaoExistir(paisObj.cidades, cidade);
            }
        }
    }

    private obterOuCriarElemento(lista: any[], nome: string, propriedadeFilha: string): any {
        let elemento = lista.find((item: any) => item.nome === nome);
        if (!elemento) {
            elemento = { nome, [propriedadeFilha]: [] };
            lista.push(elemento);
        }
        return elemento;
    }

    private adicionarSeNaoExistir(lista: any[], nome: string): void {
        if (!lista.find((item: any) => item === nome)) {
            lista.push(nome);
        }
    }

    public exibirArvoreFormatada(): any[] {
        return this.mundo;
    }
}