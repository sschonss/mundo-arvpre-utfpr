<?php
require_once 'Mundo.php';

$mundo = new Mundo();

$mundo->adicionar('América', 'Brasil', 'São Paulo');
$mundo->adicionar('América', 'Brasil', 'Rio de Janeiro');
$mundo->adicionar('América', 'Argentina', 'Buenos Aires');
$mundo->adicionar('Europa', 'França', 'Paris');
$mundo->adicionar('Europa', 'Alemanha', 'Berlim');
$mundo->adicionar('Europa', 'Italia');
$mundo->adicionar('Ásia');

$mundo->exibirArvoreFormatada();
