export class persona{
    //con ? luego del id indicamos que ese dato no es necesario (porque lo generamos automáticamente en el back)
    id? : number;
    nombre: string;
    apellido : string;
    img : string;


    constructor(nombre:string, apellido:string, img:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }


    
}