import { Component } from '@angular/core';
import { Producto } from './models/producto.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  arrayComida: Producto[];
  arrayBebida: Producto[];

  productosSeleccionados: Producto[];

  constructor(){

    this.productosSeleccionados = [];

    this.arrayComida = [
      new Producto('Cocido', 'https://lacocinademasito.com/wp-content/uploads/cocido-madrile%C3%B1o-2-1.jpg', 10.50),
      new Producto('Paella', 'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/elgranchef/R/Receta-de-paella-1.jpg', 12.20),
      new Producto('Cachopo', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cachopo-astuariano-madrid-que-es-domicilio-esquire-charca-1571913786.jpg', 15.75),
      new Producto('Pizza', 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/pizzapepperoni0.jpg', 7.80),
      new Producto('Pasta', 'https://cdn.kiwilimon.com/recetaimagen/37205/46781.jpg', 6.90),
      new Producto('Hamburguesa', 'https://saboryestilo.com.mx/wp-content/uploads/2019/07/como-preparar-carne-para-hamburguesa-1-1200x900.jpg', 5.75)
    ]

    this.arrayBebida = [
      new Producto('Coca Cola', 'https://www.cocacola.es/content/dam/GO/CokeZone/Spain/Coca-Cola-Full-Red-vidrio-Sabor-Original.jpg', 1.75),
      new Producto('Fanta', 'https://www.vegasushi.es/wp-content/uploads/2018/03/Fanta-de-Limon-y-de-Naranja-Lata.jpg', 1.65),
      new Producto('Cerveza', 'https://media-verticommnetwork1.netdna-ssl.com/wines/24-x-estrella-galicia-522032_e.jpg', 1.20),
      new Producto('Agua', 'https://raja.scene7.com/is/image/Raja/products/vella-agua-mineral-sin-gas-botella-plastico_55574.jpg?image=asset1443096$default$&hei=300&wid=300', 1.50)
    ]
  }

  onProductoSeleccionado($event){
    const productoEncontrado = this.productosSeleccionados.find(producto => producto.nombre === $event.nombre);

    if(productoEncontrado){
      productoEncontrado.cantidad ++;
    }else{
      $event.cantidad = 1
      this.productosSeleccionados.push($event);
    }
  }
}
