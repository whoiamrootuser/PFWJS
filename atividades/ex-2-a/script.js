document.addEventListener("DOMContentLoaded", function () {
    /* ----------- Utils ----------- */
    const formatResult = (value) => {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    };

    const renderParagraph = (message, result) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = `${message} = ${formatResult(result)}`;
        document.body.appendChild(paragraph);
    };

    //TODO: Lista 1/2

    vetAges = [10, 21, 31, 40];

    // TODO: a) A soma das idades
    const sumAges = (vet) => vet.reduce((sum, age) => sum + age, 0);
    renderParagraph('Soma das idades', sumAges(vetAges));

    // TODO: b) A média aritmética simples das idades
    const averageAges = (vet) => {
        const sum = sumAges(vet);
        return sum / vet.length;
    };
    renderParagraph('Média das idades', averageAges(vetAges));

    // TODO: c) A maior idade
    const maxAge = (vet) => {
        return vet.reduce((max, age) => (age > max ? age : max), vet[0]);
    };
    renderParagraph("Maior idade", maxAge(vetAges));

    // TODO: d) As idades ímpares
    const oddAges = (vet) => {
        return vet.filter(age => age % 2 !== 0);
    };
    renderParagraph("Idades ímpares", oddAges(vetAges));

    // TODO: e) Verificar se todos são maiores de idade (idade >= 18); Retorno: true ou false
    const checkIfAllAdults = (vet) => {
        return vet.every(age => age >= 18);
    };
    renderParagraph("Todos são maiores de idade (18 anos)?", checkIfAllAdults(vetAges));

    const inputAge = Number(prompt("Informe uma idade:"));

    // TODO: f) Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário
    const checkIfAllAgesGreaterThanValue = (vet, inputAge) => {
        return vet.every(age => age >= inputAge);
    };
    renderParagraph(`Todas as idades são maiores ou iguais a ${inputAge}?`, checkIfAllAgesGreaterThanValue(vetAges, inputAge));

    // TODO: g) Exibir todas as idades maiores ou iguais a determinada idade
    const agesGreaterEqualValue = (vet, inputAge) => {
        return vet.filter(age => age >= inputAge);
    };
    renderParagraph(`Idades maiores ou iguais a ${inputAge}`, agesGreaterEqualValue(vetAges, inputAge));

    // TODO: h) A média das idades das pessoas com idades maiores ou iguais a determinada idade
    const averageAgesGreaterEqualValue = (vet, inputAge) => {
        const filteredAges = vet.filter(age => age >= inputAge);
        return averageAges(filteredAges);
    };
    renderParagraph(`Média das idades maiores ou iguais a ${inputAge}`, averageAgesGreaterEqualValue(vetAges, inputAge));

});