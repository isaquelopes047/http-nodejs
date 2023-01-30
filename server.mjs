const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
/* const Tabelas = require('./infraestrutura/tabelaAtendimento') */
const PORT = process.env.PORT || 3200

conexao.connect(erro => {

    if(!erro) { 
        const app = customExpress();
        console.log('Conectado com o Bando de Dados com sucesso!')
       /*  Tabelas.init(conexao) */
        app.listen(PORT || process.env.PORT, () => { 
            console.log(`Servidor rodando em: http://localhost:${PORT}`);
        }); 
    }
    else { console.log(erro) };

});
