let num = [5,8,2,9,3]
num.push(1) //acrescenta um número no final
num.sort() //põe os vetores em ordem númerica
console.log(num) //exibe os vetores
console.log(`O vetor tem ${num.length} posições`) //length mostra a quantidade de posições
console.log(`O primeiro valor do vetor é ${num[0]}`) //[] exibe a posição do vetor
let pos = num.indexOf(4)
if(pos == -1){
    console.log('O valor 8 não foi encontrado')
} else{
    console.log(`O valor 8 está na posição ${pos}`)
}