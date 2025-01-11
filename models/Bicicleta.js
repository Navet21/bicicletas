

let Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.allBicis = [];

//Añadir Bicicleta

Bicicleta.add = function (bici) {
    this.allBicis.push(bici);
}

//Eliminar Bicicleta
Bicicleta.removeById = function (idbicicleta){
    const bicicletaelegida = this.allBicis.findIndex(bici => bici.id === idbicicleta);

    if(bicicletaelegida !== -1){
        this.allBicis.splice(bicicletaelegida,1);
        console.log(`La bicicleta con ID ${idbicicleta} eliminada exitosamente`);
    }
    else{
        console.log(`La bicicleta con ID ${idbicicleta} no existe`);
    }
}

//Modificar Bicicleta

Bicicleta.update = function (id, color, modelo, latitud , longitud) {
    const bicicletaelegida = this.allBicis.findIndex(bici => bici.id === id);

    if(bicicletaelegida !== -1){
        this.allBicis[bicicletaelegida].color = color;
        this.allBicis[bicicletaelegida].modelo = modelo;
        this.allBicis[bicicletaelegida].ubicacion = [latitud , longitud];

        console.log(`La bicicleta con el ${id} actualizada correctamente`);
    }
    else{
        console.log(`La bicicleta con el ${id} no existe`);
    }
}

let a = new Bicicleta(1, "Rojo", "Trek", [28.503789, -13.853296]);
let b = new Bicicleta(2, "Azul", "Orbea", [28.501367, -13.853476]);
Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;