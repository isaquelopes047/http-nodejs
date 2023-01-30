const Atendimento = require('../models/atendimentos');
const cors = require('cors')

module.exports = app => {

    /* Liberar CORS */
    app.use(cors({
        methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
        origin: '*',
    }));

    app.get('/atendimentos', (req, res) => {
        Atendimento.listar(res);
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Atendimento.listarPorId(id, res);
    })

    /* Recebe dois parametros */
    app.get('/atendimentos/busca/:dataInicio&:dataFinal', (req, res) => {
        const dataInicio = req.params.dataInicio
        const dataFinal = req.params.dataFinal
        Atendimento.listarPorData(dataInicio, dataFinal, res);
    })

    app.get('/atendimentos/busca/:nomeFuncionario', (req, res) => {
        const nomeFuncionario = req.params.nomeFuncionario
        Atendimento.listarPorFuncionario(nomeFuncionario, res);
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Atendimento.DeletarPorId(id, res);
    })

    app.post('/atendimentos', async (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res);
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body;

        Atendimento.alterarRegistro(id, valores, res)
    })

}
