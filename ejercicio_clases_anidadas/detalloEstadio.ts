export class DetalleEstadio {
    private id:number
    private capacidad:number
    private altura:number
    private largo:number
    private ancho: number
    constructor(id:number, capacidad:number, altura:number, largo:number, ancho:number) {
        this.id = id
        this.capacidad = capacidad
        this.altura = altura
        this.largo = largo
        this.ancho = ancho
    }
    setId(id:number):void{
        this.id = id
    }
    setCapacidad(capacidad:number):void{
        this.capacidad = capacidad
    }
    setAltura(altura:number):void{
        this.altura = altura
    }
    setLargo(largo:number):void{
        this.largo = largo
    }
    setAncho(ancho:number):void{
        this.ancho = ancho
    }
    getId():number{
        return this.id
    }
    getCapacidad():number{
        return this.capacidad
    }
    getAltura():number{
        return this.altura
    }
    getLargo():number{
        return this.largo
    }
    getAncho():number{
        return this.ancho
    }
}