export class Producto{
    nombre: string;
    imgUrl: string;
    precio: number;
    cantidad: number;

    constructor(_nombre: string, _imgUrl: string, _precio: number){
        this.nombre = _nombre;
        this.imgUrl = _imgUrl;
        this.precio = _precio;
        this.cantidad = 0;
    }
}