import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.scss']
})
export class ComandaComponent implements OnInit {

  @Input() arrayProductosRecibidos: Producto[];

  constructor() { }

  ngOnInit(): void {
  }

  calculaTotal(){
    let resultado = 0;

    for (let producto of this.arrayProductosRecibidos){
      resultado += producto.precio*producto.cantidad;
    }

    return resultado;
  }

  borrarProducto(indice){
    if(this.arrayProductosRecibidos[indice].cantidad ===1){
      this.arrayProductosRecibidos.splice(indice, 1);
    }else{
      this.arrayProductosRecibidos[indice].cantidad--;
    }
  }

}
