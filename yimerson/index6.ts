
import { Estadio } from "./estadio";
import { detalleEstadio } from "./detalleestadio";


let detalleCiroLopez= new detalleEstadio(1, 10000,100, 500, 200)
let estadioCiroLopez= new Estadio(111, "estadio cirolopez de popayan", "parque de la salud", detalleCiroLopez)
let estadioMaracana= new Estadio(200, "estadio maracana", "saupablo", new detalleEstadio(222,45.000,87,120,90))

console.log(estadioMaracana.getdetalleEstadio().getaltura());

