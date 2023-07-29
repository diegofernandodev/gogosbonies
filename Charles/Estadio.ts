import { DetalleESTADIO } from "./DetalleEstadio"
export class Estadio {
    private id:number
    private nombre: string
    private direccion:string
    private detEstadio:DetalleESTADIO

    constructor(id: number, nombre: string, direccion: string,detEstadio:DetalleESTADIO){
        this.id=id
        this.nombre=nombre
        this.direccion=direccion
        this.detEstadio=detEstadio

    }

    
    public getId(){
        return this.id
    }
    
    
    public getNombre() {
        return this.nombre
    }
    
    
    public getDireccion()  {
        return this.direccion
    }


    public getDetEstadio()  {
        return this.detEstadio
    }
    
    
    public setId(id : number) {
        this.id = id;
    }

    
    public setNombre(nombre : string) {
        this.nombre = nombre;
    }

     
    public setDireccion(direccion : string) {
        this.direccion = direccion;
    }

    
    public setDetEstadio(detEstadio : DetalleESTADIO) {
        this.detEstadio = detEstadio;
    }
    



    
    

}