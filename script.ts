import PromptSync = require("prompt-sync");
import { Bolo } from "./bolo";;

const prompt    = PromptSync () ;

const tamanho   = Number (prompt ( 'digite o tamanho do bolo'));
const sabor     = prompt ( 'sabor do bolo')
const formato   = prompt ( 'formato do bolo')
const recheio   = prompt ( 'recheio  do bolo')
const cobertura = prompt ( 'cobertura do bolo')
const valor     = Number (prompt ( 'valor do bolo'))
const fatias = Number (prompt('digite o quantidade de fatias de bolo'))

const bolo      = new Bolo ({
cobertura,
formato,
recheio,
sabor,
tamanho,
valor,
}) ;
bolo.fatiar(fatias)
console.log(`Bolo de  ${sabor} com ${recheio} seu valor  ${valor} e ainda restão ${bolo.fatias}`)