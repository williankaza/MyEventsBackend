import express, { request, response } from "express";
const app = express();
app.use(express.json());

var lsEvento: Array<Evento> = [
    {
        codigo: '001',
        descricao: 'Paixão de Cristo',
        data: new Date('2021-04-02'),
        status: 1,
        qtdPessoas: 10
    },
    {
        codigo: '002',
        descricao: 'Natal',
        data: new Date('2020-12-25'),
        qtdPessoas: 25,
        status: 0,
    },
    {
        codigo: '003',
        descricao: 'Ano novo',
        data: new Date('2021-01-01'),
        qtdPessoas: 100,
        status: 2,
    },
    {
        codigo: '004',
        descricao: 'Independência do Brasil',
        data: new Date('2020-09-07'),
        qtdPessoas: 200,
        status: 3,
    },
    {
        codigo: '005',
        descricao: 'Corpus Christi',
        data: new Date('2020-06-11'),
        qtdPessoas: 500,
        status: 0,
    },
    {
        codigo: '006',
        descricao: 'Tiradentes',
        data: new Date('2020-04-21'),
        qtdPessoas: 15,
        status: 3,
    },
    {
        codigo: '007',
        descricao: 'Nossa Senhora Aparecida',
        data: new Date('2020-10-12'),
        qtdPessoas: 357,
        status: 3,
    },
    {
        codigo: '008',
        descricao: 'Carnaval',
        data: new Date('2021-02-15'),
        qtdPessoas: 1700,
        status: 2,
        }
]

interface Evento{
    codigo: string;
    descricao: string;
    data: Date;
    qtdPessoas: number;
    status: number;
}

app.get('',(request, response)=>{
    return response.json({ hello: "Serviço iniciado!"})
})

app.get('/evento', (request, response)=>{
    return response.status(200).json(lsEvento)
})

app.get('/evento/:codEvento', ( request, response )=>{
    const { codEvento } = request.params
    const indexEvento = lsEvento.findIndex(x => x.codigo == codEvento)

    if (indexEvento > -1){
        return response.status(200).json(lsEvento[indexEvento])
    } else {
        return response.status(404).json({ error: 'Evento não encontrado!' })
    }
})

app.post('/evento', ( request, response )=>{
    const { body } = request
    const indexEvento = lsEvento.findIndex(x => x.codigo == body.codigo)
    if (indexEvento == -1){
        let novoEvento: Evento = {
            codigo: body.codigo,
            data: body.data,
            descricao: body.descricao,
            qtdPessoas: body.qtdPessoas,
            status: body.status
        }

        lsEvento.push(novoEvento);
        return response.status(201).json( novoEvento )
    } else {
        return response.status(400).json({ error: 'Evento informado já foi cadastrado!' })
    }
})

app.put('/evento/:codEvento', (request, response)=>{
    const { body } = request
    const { codEvento } = request.params

    const indexEvento = lsEvento.findIndex(x => x.codigo == codEvento)

    if (indexEvento > -1){
        let evento = lsEvento[indexEvento]
        
        evento.data = body.data
        evento.descricao = body.descricao
        evento.qtdPessoas = body.qtdPessoas
        evento.status = body.status

        lsEvento[indexEvento] = evento
        return response.status(200).json( evento )
    } else {
        return response.status(400).json({ error: 'Evento não encontrado!' })
    }
})

app.delete('/evento/:codEvento', (request, response)=>{
    const { codEvento } = request.params
    const indexEvento = lsEvento.findIndex(x=> x.codigo == codEvento)

    if (indexEvento > -1){
        lsEvento.splice(indexEvento,1)
        return response.status(204)
    } else {
        return response.status(400).send({ error: 'Evento não encontrado!'})
    }
})


app.listen(12173, ()=>{
    console.log('App inicializado')
})