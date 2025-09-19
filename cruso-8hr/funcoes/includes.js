const numeros = [10, 13, 14, 6];
secolherNum(10);

function secolherNum(num) {
    if (numeros.includes(num)) {
        console.log("Seu numero está no vetor")
    } else {
        console.log("Seu numro não está no vetor")
    };
}