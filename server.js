const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
/* const Tabelas = require('./infraestrutura/tabelaAtendimento') */

conexao.connect(erro => {

    if(!erro) { 
        const app = customExpress();
        console.log('Conectado com o Bando de Dados com sucesso!')
       /*  Tabelas.init(conexao) */
        app.listen(process.env.PORT);
    }
    else { console.log(erro) };

});
