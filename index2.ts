import { Mundo2, Localizacao } from './Mundo2';

const mundo = new Mundo2();

mundo.adicionar({ continente: 'América', pais: 'Brasil', cidade: 'São Paulo' });
mundo.adicionar({ continente: 'América', pais: 'Brasil', cidade: 'Rio de Janeiro' });
mundo.adicionar({ continente: 'América', pais: 'Argentina', cidade: 'Buenos Aires' });
mundo.adicionar({ continente: 'Europa', pais: 'França', cidade: 'Paris' });
mundo.adicionar({ continente: 'Europa', pais: 'Alemanha', cidade: null });
mundo.adicionar({ continente: 'África' });

console.log(JSON.stringify(mundo.exibirArvoreFormatada(), null, 2));

