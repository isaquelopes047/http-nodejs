class TabelaAtendimentos {
    init(conexao) {
        this.conexao = conexao

        this.criarAtendimentos();
    }

    criarAtendimentos() {
        const sql = 
        `
        CREATE TABLE  IF NOT EXISTS Atendimentos (
            id int NOT NULL AUTO_INCREMENT,
            nomeTecnico varchar(50) NOT NULL,
            nomeFuncionario varchar(50) NOT NULL,
            modeloCelularAntigo varchar(50) NOT NULL,
            numeroPatrimonioAntigo varchar(50) NOT NULL,
            numeroDeCelularAntigo varchar(50) NOT NULL,
            problemaIdentificado varchar(50) NOT NULL,
            modeloCelularNovo varchar(50) NOT NULL,
            numeroPatrimonioNovo varchar(50) NOT NULL,
            numeroDeCelularNovo varchar(50) NOT NULL,
            observacao varchar(150) NOT NULL,
            dataEHora varchar(15) NOT NULL,
            PRIMARY KEY(id)
        )
        `
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela criada com sucesso')
            }
        })
    }
}

module.exports = new TabelaAtendimentos