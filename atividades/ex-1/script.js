window.addEventListener("DOMContentLoaded", function() {
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
            vet.forEach(age => {
            if (age > max) max = age;
            });
            return max;
        };
    // TODO: c) As idades ímpares
        const oddAges = (vet) => {
            const odd = [];
            vet.forEach(age => {
            if (age % 2 != 0) odd.push(age);
            });
            return odd;
        };

    // TODO: d) Verificar se todos são maiores de idade (idade >= 18); Retorno: true ou false
        const checkIfAllAdults = (vet) => {
            let allAdults = true;
            vet.forEach(age => {
            if (age < 18) allAdults = false;
            });
            return allAdults;
        };

    // TODO: e) Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário
        const checkIfAllAgesGreaterThanValue = (vet, inputAge) => {
            let allAges = true;
            vet.forEach(v => {
            if (v < inputAge) allAges = false;
            });
            return allAges;
        };

    // TODO: f) Exibir todas as idades maiores ou iguais a determinada idade
        const agesGreaterEqualValue = (vet, inputAge) => {
            const ages = [];
            vet.forEach(v => {
                if (v >= inputAge) ages.push(v);
            });
            return ages;
        };

    // TODO: g) A média das idades das pessoas com idades maiores ou iguais a determinada idade
        const averageAgesGreaterEqualValue = (vet, inputAge) => {
            const ages = [];
            vet.forEach(v => {
                if (v >= inputAge) ages.push(v);
            });
            return ages.reduce((acc, curr) => acc + curr, 0) / ages.length;
        };

        //Show each result inside a paragraphs
        const formatResult = (value) => {
            if(Array.isArray(value)) return value.join(', ');
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
        renderParagraph(`Todas as idades são maiores ou iguais a ${promptAge}?`,checkIfAllAgesGreaterThanValue(vetAges, promptAge));
        renderParagraph(`Idades maiores ou iguais a ${promptAge}`, agesGreaterEqualValue(vetAges, promptAge));
        renderParagraph(`Média das idades maiores ou iguais a ${promptAge}`, averageAgesGreaterEqualValue(vetAges, promptAge));
});