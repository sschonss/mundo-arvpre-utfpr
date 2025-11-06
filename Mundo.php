<?php

class Mundo
{
    protected array $mundo = [];

    public function adicionar(string $continente, ?string $pais = null, ?string $cidade = null): void
    {
        if (!isset($this->mundo[$continente])) {
            $this->mundo[$continente] = [];
        }
        if (!isset($this->mundo[$continente][$pais])) {
            $this->mundo[$continente][$pais] = [];
        }
        if (!in_array($cidade, $this->mundo[$continente][$pais])) {
            $this->mundo[$continente][$pais][] = $cidade;
        }
    }

    public function exibirArvoreFormatada()
    {
        if (empty($this->mundo)) {
            echo "Nenhum continente cadastrado.\n";
            return;
        }
        foreach ($this->mundo as $continente => $paises) {
            if (empty($paises)) continue;
            echo "Continente: $continente\n";
            foreach ($paises as $pais => $cidades) {
                if (empty($pais)) continue;
                echo str_repeat(' ', 4) . "País: $pais\n";
                foreach ($cidades as $cidade) {
                    if (empty($cidade)) continue;
                    echo str_repeat(' ', 8) . "Cidade: $cidade\n";
                }
            }
            echo "\n";
        }
    }
}