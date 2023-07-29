import { DetalleESTADIO } from "./DetalleEstadio";

import { Estadio } from "./Estadio";



let detalle1 = new DetalleESTADIO(369,963,639,936,666);
let maracana = new Estadio(963,"maracana","saopablo brasil", detalle1);
let pascual = new Estadio(639,"pascual guerrero","sanfernando cali",  new DetalleESTADIO(963,639,396,369,693))


console.log(pascual.getDetEstadio().getAltura());


