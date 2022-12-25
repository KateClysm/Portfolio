export class persona{
    //con ? luego del id indicamos que ese dato no es necesario (porque lo generamos automáticamente en el back)
    id? : number;
    nombre: string;
    apellido : string;
    img : string;
    descripcion: string;


    constructor(nombre:string, apellido:string, img:string, descripcion:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.descripcion = descripcion;
    }


    
}