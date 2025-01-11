
let Bicicleta = require("../../models/Bicicleta");

exports.bicicleta_list = function(req, res) {
    res.status(200).json ({
        bicicletas: Bicicleta.allBicis
    });    
};

exports.bicicleta_create = function(req,res){
    let bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.latitud, req.body.longitud];

    Bicicleta.add(bici);

    res.status(201).json({
        bicicleta: bici
    })
}

exports.bicicleta_delete = function(req,res){
    Bicicleta.removeById(req.body.id);
    res.status(204).send();
};

exports.bicicleta_update = function(req,res){
    Bicicleta.update(req.body.id,req.body.color,req.body.modelo,req.body.latitud,req.body.longitud);
    res.status(200).send();
}

exports