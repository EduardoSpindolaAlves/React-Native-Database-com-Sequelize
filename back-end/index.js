(async () => {
    const database = require('./cadastrar');
    const test = require('./test');

    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }

}) ();


/*Lembrando que...

// Para o sync funcionar pelo menos o Banco de dados precisa existir, a tabela pode ser criada

//Exemplo de tabela criada no produto.js */ 