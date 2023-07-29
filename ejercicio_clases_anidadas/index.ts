import { Estadio} from "./estadio";
import { DetalleEstadio } from "./detalloEstadio";

let detallesCiroLopez = new DetalleEstadio(100,20000,20,100,50)

let Estadio_Ciro_Lopez = new Estadio(123,"Ciro lopez","cll 4 2 32",detallesCiroLopez)
let Estadio_Maracana = new Estadio(123,"Ciro lopez","cll 4 2 32", new DetalleEstadio(101,30000,25,150,60))

console.log(Estadio_Maracana.getDetalleEstadio().getAltura());


 

