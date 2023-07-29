export class DetalleESTADIO {
    private id: number
    private capacidad: number
    private altura : number
    private largo: number
    private ancho:number
    constructor(id : number, capacidad: number,altura : number,largo: number,ancho:number ) {
        this.id= id
        this.capacidad = capacidad
        this.altura= altura
        this.largo= largo
        this.ancho= ancho
        
    }

    
    public getId() {
        return this.id
    }
    
    public getCapacidad(){
        return this.capacidad
    }
    
    public getAltura() {
        return this.altura
    }

    
    public getLargo() {
        return this.largo
    }
    
    public getAncho() {
        return this.ancho
    }

    
    public setIde(id : number) {
        this.id = id;
    }

    
    public setCapacidad(capacidad : number) {
        this.capacidad = capacidad;
    }

    
    public setAltura(altura : number) {
        this.altura = altura;
    }
    
    
    public setLargo(largo : number) {
        this.largo = largo;
    }
    
    
    public setAncho(ancho : number) {
        this.ancho = ancho;
    }
    
    
    
    
    



}
