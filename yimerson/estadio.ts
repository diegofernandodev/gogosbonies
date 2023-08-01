import { detalleEstadio } from "./detalleestadio"


export class Estadio{
    private id:number
    private nombre:string
    private direccion:string
    private detalleEstadio: detalleEstadio
   
    constructor(id:number, nombre:string, direccion:string, detalleEstadio: detalleEstadio){
       this.id = id
       this.nombre = nombre
       this.direccion = direccion
       this.detalleEstadio = detalleEstadio
       
    }
    public getid(): number {
       return this.id;
   }
   
   public setid(value: number) {
          this.id=value;
       
   }
   public getnombre(): string {
       return this.nombre;
   }
   public setnombre(value: string) {
       this.nombre=value;
    
   }
    public getdireccion(): string {
   return this.direccion;
   }
   public setdireccion(value: string) {
   this.direccion=value;

}
   public getdetalleEstadio() {
   return this.detalleEstadio;
}

   public setdetalleEstadio(detalleEstadio: detalleEstadio) {
      this.detalleEstadio=detalleEstadio;
   
   }
}