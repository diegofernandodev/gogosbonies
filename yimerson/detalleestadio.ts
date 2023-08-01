export class detalleEstadio{
     private id:number
     private capacidad:number
     private altura:number
     private largo:number
     private ancho:number

     constructor(id:number, capacidad:number, altura:number, largo:number, ancho:number){
        this.id = id
        this.capacidad = capacidad
        this.altura = altura
        this.largo = largo
        this.ancho = ancho
     }
     public getid(): number {
        return this.id;
    }
    
    public setid(value: number) {
           this.id=value;
        
    }
    public getcapacidad(): number {
        return this.capacidad;
    }
    public setcapacidad(value: number) {
        this.capacidad=value;
     
    }
     public getaltura(): number {
    return this.altura;
    }
    public setaltura(value: number) {
    this.altura=value;
 
}
    public getlargo(): number {
    return this.largo;
}

    public setlargo(value: number) {
       this.largo=value;
    
}
    public getancho(): number {
    return this.ancho;
}
    public setancho(value: number) {
    this.ancho=value;
}
}
