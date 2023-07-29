import {Estadio} from "./Estadio";
import { DetalleEstadio } from "./detalleEstadio";

let detallePascual = new Estadio(123, "pascual guerrero", "cll 5 # 12-20", new DetalleEstadio(245, 200, 15, 25, 30))

let detalleEstadio = new DetalleEstadio(214, 36, 25,27,100)
let detalleCiroLopez = new Estadio(541, "ciro", "cll 5 # 12-21", detalleEstadio) 

console.log(detallePascual.getDetalleEstadio().getAltura())

