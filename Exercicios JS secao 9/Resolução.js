//Cumprimento
function cumprimentar(nome) {
    return `Olá, ${nome}!`
}

//Converter idade em anos para dias
const converterIdadeEmAnosParaDias = idadeAno => {
    return idadeAno*365
}

//Calcular salario no mes
const calcularSalario = function (horas, salarioPorHora) {
    return `Salário igual a R$ ${horas*salarioPorHora}`
}

//Nome do mes
function nomeDoMes(indice) {
    let meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    return meses[indice - 1]
}

//Maior ou igual que
const maiorOuIgual = (x, y) => {
    return x > y || x === y
}

//Retorna o inverso
function inverso(x) {
    switch (typeof x) {
        case 'boolean':
            return !x
            break
        case 'number':
            return -x
            break
        default:
            return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof x}`
    }
}

//Se número está entre dois valores
const estaEntre = function (minimo, maximo, numero, inclusivo = false) {
    if(inclusivo){
        return numero >= minimo && numero <= maximo
    }else{
        return numero > minimo && numero < maximo
    }
}

//Multiplicador
function multiplicar(x, y){
    let resultado = 0
    for(let i=0; i < y; i++) resultado += x
    return resultado
}

//Criar lista com itens repetidos
function repetir(x, n){
    let list = []
    for(let i = 0; i < n; i++) list.push(x)
    return list
}

//Repetição do simbolo +
function simboloMais(x){
    let list = []
    for(let i = 0; i < x; i++) list.push('+')
    return list.join('')
}

//Retorna o primeiro e último elemento da array
function receberPrimeiroEUltimoElemento(array){
    return [array[0], array[array.length - 1]]
}

//Remover propriedade
function removerPropriedade(object, propriedade){
    delete object[propriedade]
    return object
}

//Filtrar os números de uma array
function filtrarNumeros(array){
    return array.filter(i => {return typeof i === 'number'})
}

//Array de array
function objetoParaArray(objeto){
    let array = []
    for (propriedade in objeto){
        array.push([propriedade, objeto[propriedade]])
    }
    return array
}

//Elementos e índices pares
function receberSomenteOsParesDeIndicesPares(array){
    return array.filter((elemento, indice) => elemento%2==0 && indice%2==0)
}

//Checar se ano é bissexto
function checarAnoBissexto(ano){
    return ano%4==0 && (ano%100!=0 || ano%400==0)
}

//Soma dos elementos de uma array
function somarNumeros(array){
    return array.reduce((x, y) => x + y)
}

//Despesas
function despesasTotais(array){
    return array.map(obj => obj.preco).reduce((x, y) => x + y)
}

//Média simples

function calcularMedia(array){
    return array.reduce((x, y) => x + y)/array.length
}

//Área do triângulo
function areaDoTriangulo(base, altura){
    return (base * altura / 2).toFixed(2)
}

//Menor número
function menorNumero(array){
    return array.sort((a, b) => a-b)[0]
}

//Número sorteado
function funcaoDaSorte(x){
    let numSorteado = Math.floor(Math.random()*10) + 1
    return x == numSorteado? `Parabéns! O número sorteado foi o ${numSorteado}` : `Que pena! O número sorteado foi o ${numSorteado}`
}

//Contador de palavras
function contarPalavras(texto){
    return texto.split(' ').length
}

//Contador de caractere
function contarCaractere(caractere, texto){
    let cont = 0
    texto.split('').forEach(i => i===caractere? ++cont:i)
    return cont
}

//Filtrar array por palavra
function buscarPalavrasSemelhantes(palavra, array){
    return array.filter(i => i.includes(palavra))
}

//Remover vogais
function removerVogais(texto){
    /*
    *g tells to find all matches, not just the first.
    *i tells to be case insensitive.
    *What goes inside the // is the pattern.
    *[] tells to match any character in a set.
    *aeiou are the characters in the set.
    */
    return texto.replace(/[aeiou]/gi, '')
}

//Inverter chave valor
function inverter(obj){
    let newObj = {}
    Object.entries(obj).forEach(parChaveValor => newObj[parChaveValor[1]] = parChaveValor[0])
    return newObj
}

//Filtrar por quantidade de dígitos
function filtrarPorQuantidadeDeDigitos(array, n){
    return array.filter(i => `${i}`.length == n)
}

//Segundo maior
function segundoMaior(array){
    return array.sort((a, b) => b-a)[1]
}

//Melhor estudante
function recerberMelhorEstudante(obj){
    medias = Object.values(obj).map(notas => calcularMedia(notas))
    indice = medias.indexOf(Math.max(...medias))
    return {nome: Object.keys(obj)[indice], media: medias[indice]}
}

console.log(recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    }))