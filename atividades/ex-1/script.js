window.addEventListener("DOMContentLoaded", function () {
    const sumAges = (vet) => {
        sum = 0;
        for (i = 0; i < vet.length; i++) sum += vet[i];
        return sum;
    };
    vetAges = [10, 21, 31, 40];
    document.write(`<p>Soma das idades = ${sumAges(vetAges)}</p>`);

    // TODO: a) A média aritmética simples das idades
    const averageAges = (vet) => {
        sum = 0;
        for (i = 0; i < vet.length; i++) sum += vet[i];
        return sum / vet.length;
    };

    // TODO: b) A maior idade
    const maxAge = (vet) => {
        let max = vet[0];
        for (let i = 1; i < vet.length; i++) {
            if (vet[i] > max) max = vet[i];
        }
        return max;
    };
    // TODO: c) As idades ímpares
    const oddAges = (vet) => {
        const odd = [];
        for (let i = 0; i < vet.length; i++) {
            if (vet[i] % 2 != 0) odd.push(vet[i]);
        }
        return odd;
    };

    // TODO: d) Verificar se todos são maiores de idade (idade >= 18); Retorno: true ou false
    const checkIfAllAdults = (vet) => {
        let allAdults = true;
        for (let i = 0; i < vet.length; i++) {
            if (vet[i] < 18) {
                allAdults = false;
                break;
            }
        }
        return allAdults;
    };

    // TODO: e) Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário
    const checkIfAllAgesGreaterThanValue = (vet, inputAge) => {
        let allAges = true;
        for (let i = 0; i < vet.length; i++) {
            if (vet[i] < inputAge) {
                allAges = false;
                break;
            }
        }
        return allAges;
    };

    // TODO: f) Exibir todas as idades maiores ou iguais a determinada idade
    const agesGreaterEqualValue = (vet, inputAge) => {
        const ages = [];
        for (let i = 0; i < vet.length; i++) {
            if (vet[i] >= inputAge) ages.push(vet[i]);
        }
        return ages;
    };

    // TODO: g) A média das idades das pessoas com idades maiores ou iguais a determinada idade
    const averageAgesGreaterEqualValue = (vet, inputAge) => {
        const ages = [];
        for (let i = 0; i < vet.length; i++) {
            if (vet[i] >= inputAge) ages.push(vet[i]);
        }
        let sum = 0;
        for (let i = 0; i < ages.length; i++) {
            sum += ages[i];
        }
        return sum / ages.length;
    };

    //Show each result inside a paragraphs
    const formatResult = (value) => {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    };

    const renderParagraph = (message, result) => {
        document.write(`<p>${message} = ${formatResult(result)}</p>`);
    };

    renderParagraph("Média das idades", averageAges(vetAges));
    renderParagraph("Maior idade", maxAge(vetAges));
    renderParagraph("Idades ímpares", oddAges(vetAges));
    renderParagraph("Todas as idades são maiores de idade?", checkIfAllAdults(vetAges));

    const promptAge = parseInt(prompt('Digite uma idade: '));
    renderParagraph(`Todas as idades são maiores ou iguais a ${promptAge}?`, checkIfAllAgesGreaterThanValue(vetAges, promptAge));
    renderParagraph(`Idades maiores ou iguais a ${promptAge}`, agesGreaterEqualValue(vetAges, promptAge));
    renderParagraph(`Média das idades maiores ou iguais a ${promptAge}`, averageAgesGreaterEqualValue(vetAges, promptAge));
});