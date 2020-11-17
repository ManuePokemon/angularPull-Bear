class Articulo{
    id:number;
    porducto:string;
    descripcion:string;
    color:string;
    talla:number;
    cantidad:number;
    rebajado:boolean;
    precioOriginal:number;
    precioRebajado:number;

    constructor(id:number,porducto:string,descripcion:string,color:string,talla:number,cantidad:number,rebajado:boolean,precioOriginal:number,precioRebajado:number){
        this.id = id;
        this.porducto = porducto;
        this.descripcion = descripcion;
        this.color = color;
        this.talla = talla;
        this.cantidad = cantidad;
        this.rebajado = rebajado;
        this.precioOriginal = precioOriginal;
        this.precioRebajado = precioRebajado;
    }
}
export {Articulo};