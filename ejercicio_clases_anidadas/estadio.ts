import { DetalleEstadio } from "./detalloEstadio";
export class Estadio{
    private id: number
    private nombre: string
    private direccion: string
    private detalleEstadio: DetalleEstadio
    constructor(id:number, nombre:string, direccion:string, detalleEstadio: DetalleEstadio) {
        this.id = id
        this.nombre = nombre
        this.direccion = direccion
        this.detalleEstadio= detalleEstadio
    }
    setDetalleEstadio2(id:number,capacida:number,alto:number,largo:number,ancho:number){
        this.detalleEstadio  = new DetalleEstadio(id,capacida,alto,largo,ancho)
    }
    setId(id:number):void {
        this.id = id
    }
    setNombre(nombre:string):void{
        this.nombre = nombre
    }
    setDireccion(direccion:string):void{
        this.direccion = direccion
    }
    getId():number{
        return this.id
    }
    getNombre():string{
        return this.nombre
    }
    getDireccion():string{
        return this.direccion
    }
    getDetalleEstadio(): DetalleEstadio{ 
        return this.detalleEstadio
    }


}