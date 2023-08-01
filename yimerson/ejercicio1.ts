
//console.log("hello world"); 
//let nombre:string= " yimerson "

//console.log(" hello " + nombre)

let nome:string= " jose "

let edad:number= 12345

let vf :boolean= true

console.log(nome+" " + edad +" "+ vf)

let nombreestudiantes:string[] = ["jose", "aaa", "bbb", "ccc", "ddd", "eee",]  
console.log(nombreestudiantes);

for(let i= 0; i < 3; i++){
    console.log(nombreestudiantes[i]);
}

let nombreestudiantes1:Array<number> = [1,2,3,4,5,6];
for(let i= 0; i < nombreestudiantes1.length; i++){
    console.log(nombreestudiantes1[i]);
}



function miMetodo1(nombre: string, apellido:string, edad?:number){
    if (edad) {
        console.log(nombre+" "+apellido + " mi edad es: "+ edad);
    } else {
        console.log(nombre+" "+apellido); 
    }
}
miMetodo1("jose", "chavez", 18)


function miMetodo(numero1: number, numero2:number):number {
    let resultado = numero1 / numero2;
    return resultado
}

//let resultadovivision = metodito(10, 2);
//console.log(resultadovivision);    

console.log(miMetodo(10, 2));



const resta = (num1:number, num2:number) =>{
    console.log(num1-num2);
}
let a = resta(2,1)

const resta2 = (num1:number, num2:number) =>{
    return(num1 - num2);
}
console.log(resta2(5, 1))















