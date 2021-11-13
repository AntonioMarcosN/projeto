const input = require("readline-sync");

//var document = Document

console.log("== Vamos calcular o novo valor de sua fatura ==")
const valor = parseInt(input.question("Informe o valor da fatura: "))
const vencimento = input.question("Informe o vencimento da fatura: ")
const pagamento = input.question("Quando você predente pagar?: ")

vl = valor
vc = vencimento
pg = pagamento
i = 1
dr = (pg - vc)

j = (i * dr)

function soma  () {
    vl + j
}

new Date (vencimento)


console.log(vl);

console.log(j);

console.log(dr);

console.log(pg);

/*function (event) {
    event.preventDefault();
 var start= new Date(document.getElementById("datainicio").value);
   var end = new Date(document.getElementById("datafim").value);
var dr    = moment.range(start, end);

dr.diff('months'); // 3
dr.diff('days'); // 92
alert( dr.diff();) // 7945200000

//   mostrarinfo();
});
*/