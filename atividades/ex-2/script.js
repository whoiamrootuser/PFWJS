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

    document.body.appendChild(document.createElement('h2')).textContent = "Lista 2 - Exercício 1/2";



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

    //TODO: Lista 2/2

    document.body.appendChild(document.createElement('h2')).textContent = "Lista 2 - Exercício 2/2";

    const tableContent = [
        {
            Nome: "Ana",
            Idade: 18,
            Genero: "F",
            Salario: 1000,
        },
        {
            Nome: "João",
            Idade: 20,
            Genero: "M",
            Salario: 3000,
        },
        {
            Nome: "César",
            Idade: 33,
            Genero: "M",
            Salario: 1900,
        },
        {
            Nome: "Maria",
            Idade: 12,
            Genero: "F",
            Salario: 7000,
        },
        {
            Nome: "Zé",
            Idade: 17,
            Genero: "M",
            Salario: 2400,
        },
    ];

    const table = document.createElement("table");
    table.innerHTML = `<tr>
                        ${Object.keys(tableContent[0])
            .map((coluna) => `<th>${coluna}</th>`)
            .join("")}
                    </tr>
                    ${tableContent
            .map(
                (linha) =>
                    `<tr>${Object.values(linha)
                        .map((coluna) => `<td>${coluna}</td>`)
                        .join("")}</tr>`
            )
            .join("")}`;
    table.style.border = "1px solid black";
    document.body.appendChild(table);

    // TODO: Maiores de idade
    const maioresDeIdade = tableContent.filter((elem) => elem.Idade >= 18);
   renderParagraph(
        "Maiores de idade", maioresDeIdade
            .map((elem) => `Nome: ${elem.Nome} Idade: ${elem.Idade}`)
            .join("; ")
    );

    //TODO: Sexo masculino
    const men = tableContent.filter((elem) => elem.Genero === "M");
    renderParagraph(
        "Pessoas do sexo masculino", men
            .map((elem) => `Nome: ${elem.Nome} Idade: ${elem.Idade}`)
            .join("; ")
    );

    //TODO: Pessoa com maior salário
    const maxSalary = tableContent.reduce((acc, elem) =>
        acc.Salario > elem.Salario ? acc : elem
    );
    renderParagraph(
        "Pessoa com maior salário", `${maxSalary.Nome} com salário de ${maxSalary.Salario}`
    );

    //TODO: Há alguma mulher que ganha acima de 5000?
    const womanWithHighestSalary = tableContent.some(
        (elem) => elem.Genero === "F" && elem.Salario > 5000
    );
    renderParagraph(
        "Há alguma mulher com salário acima de 5000?", womanWithHighestSalary
    );

    //TODO: Média dos salarios dos homens e das mulheres
    const averageSalaries =
        tableContent.reduce((acc, elem) => {
            if (elem.Genero === "M") {
                acc.man += elem.Salario;
            } else {
                acc.woman += elem.Salario;
            }
            return acc;

        }, { woman: 0, man: 0 });

    renderParagraph(
        "Média dos salários dos homens", (averageSalaries.man / men.length).toFixed(2)
    );

    renderParagraph(
        "Média dos salários das mulheres", (averageSalaries.woman / (tableContent.length - men.length)).toFixed(2)
    );
});