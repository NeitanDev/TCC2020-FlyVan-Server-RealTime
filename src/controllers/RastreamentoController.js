module.exports = {

    async rastrear(req,res){
        const {latitude,longitude,id_viagem} =  req.body;
        const sounou = {latitude,longitude,id_viagem};
        req.io.emit(`rastreamento/${id_viagem}`, sounou);

        res.json( {latitude,longitude,id_viagem})
    },

    async notificar(req,res){
        const {id_passageiro} =  req.body;
        req.io.emit(`notificar/${id_passageiro}`, id_passageiro);

        console.log('sounou')

        res.json( {id_passageiro})
    },

    async cancelarViagem(req,res){
        const {id_passageiro, id_viagem} = req.body;

        const dados = {id_passageiro, id_viagem}

        req.io.emit(`cancela/viagem/${id_viagem}`,dados);

        return res.json({sounou:true})
    }
};