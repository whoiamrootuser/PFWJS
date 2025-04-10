export const managerUser = {
    showAllUsers: (users) => {
        users.forEach(user => {
            console.log(`Nome: ${user.nome}, Idade: ${user.idade}, Cidade: ${user.cidade}`);
        });
    },
    getMen: (users) => {
        return users.filter(user => user.sexo === 'M');
    },
}