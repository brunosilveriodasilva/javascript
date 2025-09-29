/* const vetor = ["banana1", "pera2", "mamão3", "tomate4", "pera5"];

vetor.forEach( function (fruta, i) {
    if (i === 0) {
        console.log(`indice: ${fruta}`);
    } else if (i === 3) {
        console.log(`indice: ${fruta}`);
    }
});
 */

function parimpar(n) {
    if (n%2 === 0) {
        return 'Par!';
    } else {
        return 'Impar!';
    }
}

console.log(parimpar(2342342343));