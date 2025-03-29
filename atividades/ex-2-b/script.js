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