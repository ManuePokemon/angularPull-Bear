import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {Articulo} from '../../../models/articulo';

@Component({
  selector: 'app-articulos-component',
  templateUrl: './articulos-component.component.html',
  styleUrls: ['./articulos-component.component.scss']
})
export class ArticulosComponentComponent implements OnInit, OnChanges {

  articulos:Articulo[] = [];
  total:number;

  constructor() {

  }

  ngOnInit(): void {
    this.total = 0;
    this.articulos.push(new Articulo(1,"Zapatos","Zapatos de cuero","Marron",45,10,true,10,9));
    this.articulos.push(new Articulo(2,"Zapatos","Zapatos de cuero","Verde",45,1,true,10,9));
    this.articulos.push(new Articulo(3,"Zapatos","Zapatos de cuero","Azul",45,1,false,10,9));

    function calcularTotal(lista:Articulo[]){
      let total:number = 0;
      for(let i:number = 0; i < lista.length; i++){
        if (lista[i].rebajado){
          total += (lista[i].precioRebajado*lista[i].cantidad);
        }else{
          total += (lista[i].precioOriginal*lista[i].cantidad);
        }
      }
      return total;
    }
    this.total = calcularTotal(this.articulos);

  }

  ngOnChanges(cambios: SimpleChanges): void{
    function calcularTotal(lista:Articulo[]){
      let total:number = 0;
      for(let i:number = 0; i < lista.length; i++){
        if (lista[i].rebajado){
          total += (lista[i].precioRebajado*lista[i].cantidad);
        }else{
          total += (lista[i].precioOriginal*lista[i].cantidad);
        }
      }
      return total;
    }
    this.total = calcularTotal(this.articulos);
  }

  eliminarArticulo(index:number){
    this.articulos.splice(index,1);
    function calcularTotal(lista:Articulo[]){
      let total:number = 0;
      for(let i:number = 0; i < lista.length; i++){
        if (lista[i].rebajado){
          total += (lista[i].precioRebajado*lista[i].cantidad);
        }else{
          total += (lista[i].precioOriginal*lista[i].cantidad);
        }
      }
      return total;
    }
    this.total = calcularTotal(this.articulos);
  }

}
