import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Producto} from '../../models/producto.model'

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: string;
  @Input() productos: Producto[];

  @Output() productoSeleccionado: EventEmitter<Producto>;

  constructor() { 
    this.productoSeleccionado = new EventEmitter();
    }

  ngOnInit(): void {
  }

  addProduct(_producto){
    this.productoSeleccionado.emit(_producto);
  }

}
