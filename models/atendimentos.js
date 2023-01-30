const conexao = require('../infraestrutura/conexao');

class Atendimento {
    /* Cadatra um registro, e faz uma pequena validação */
    adiciona(atendimento, res) {

            const sql = 'INSERT INTO atendimentos SET ?'
            conexao.query(sql, atendimento, (erro, resultados) => {
                if (erro) {
                    res.status(400).json(erro)
                }
                else {
                    res.status(201).json(resultados)
                }
            })
    }

    /* Todos os registros no banco */
    listar(res) {
        const sql = 'SELECT * FROM atendimentos'
        conexao.query(sql, (erro, resultados) => {
            
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    listarPorId(id, res, error) {
        if(error) {return res.status(400).send({error: error})};

        const sql = `SELECT * FROM atendimentos WHERE id=${id};`
        conexao.query(sql, (erro, resultados) => {
            
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    apagaRegistro(id, res, error) {
        if(error) {return res.status(400).send({error: error})}

        const sql = `DELETE FROM atendimentos WHERE id=${id};`
        conexao.query(sql, (error) => {
               
            if(error) {return res.status(400).send({error: error})}

            const response = {
                mensagem: 'Registro deletado com sucesso!',
                registroApagado: {
                    request: {
                        tipo: 'POST',
                        descricao: 'Realizar novo registro',
                        url: 'http://localhost:3000/atendimentos'
                    }
                }
            }
            res.status(202).send({response})
        })
    }

    /* Listar registro pelo seu primary key */
    listarPorId(id, res) {
        const sql = `SELECT * FROM atendimentos WHERE id = ${id}`
        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
    
    /* Listar registro por nomeFuncionario, GET em todos que tem registro */
    listarPorFuncionario(nomeFuncionario, res) {
        const sql = `SELECT * FROM atendimentos WHERE nomeFuncionario = '${nomeFuncionario}' ORDER BY id DESC`;
        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    /* Lista por data com dois parametros de data inicial e final */
    listarPorData(dataInicio, dataFinal, res) {
        const sql = `SELECT * FROM atendimentos WHERE dataEHora BETWEEN '${dataInicio}' and '${dataFinal}'`;
        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    /* Deletar um item por parametro */
    DeletarPorId(id, res) {
        const sql = `DELETE FROM atendimentos WHERE id = ${id}`
        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    /* Alterar um registro por parametro */
    alterarRegistro(id, valores, res) {
        const sql = 'UPDATE atendimentos SET ? WHERE id = ?'
        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
}

module.exports = new Atendimento