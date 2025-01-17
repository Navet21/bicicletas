
let Bicicleta = require("../../models/Bicicleta");


/**
 * @swagger
 * tags:
 *   name: Bicicletas
 *   description: La API de las bicicletas
 * /api/bicicletas:
 *   get:
 *     summary: Lista de Bicicletas
 *     tags: [Bicicletas]
 *     responses:
 *       200:
 *         description: Lista de Bicicletas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bicicleta'
 * 
 */


exports.bicicleta_list = function(req, res) {
    res.status(200).json ({
        bicicletas: Bicicleta.allBicis
    });    
};


/**
 * @swagger
 * /api/bicicletas/create:
 *   post:
 *     summary: Crear una nueva Bicicleta
 *     tags: [Bicicletas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       200:
 *         description: Bicicleta creada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bicicleta'
 *       500:
 *         description: Algún error del servidor
 */


exports.bicicleta_create = function(req,res){
    let bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.latitud, req.body.longitud];

    Bicicleta.add(bici);

    res.status(201).json({
        bicicleta: bici
    })
}

/**
 * @swagger
 * /api/bicicletas/delete:
 *   delete:
 *     summary: Borrar una Bicicleta
 *     tags: [Bicicletas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       200:
 *         description: Bicicleta eliminada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bicicleta'
 *       500:
 *         description: Algún error del servidor
 */


exports.bicicleta_delete = function(req,res){
    Bicicleta.removeById(req.body.id);
    res.status(204).send();
};

/**
 * @swagger
 * /api/bicicletas/update:
 *   put:
 *     summary: Actualizar una Bicicleta
 *     tags: [Bicicletas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       200:
 *         description: Bicicleta eliminada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bicicleta'
 *       500:
 *         description: Algún error del servidor
 */

exports.bicicleta_update = function(req,res){
    Bicicleta.update(req.body.id,req.body.color,req.body.modelo,req.body.latitud,req.body.longitud);
    res.status(200).send();
}

exports