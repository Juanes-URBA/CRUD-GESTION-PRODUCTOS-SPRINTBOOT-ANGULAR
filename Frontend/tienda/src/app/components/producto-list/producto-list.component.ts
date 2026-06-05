import { Component, OnInit } from '@angular/core';

import { Producto } from '../../models/producto.model';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
})
export class ProductoListComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.listar().subscribe(data => {
      this.productos = data;
    });
  }

  eliminar(id: number): void {

    if(confirm('¿Desea eliminar este producto?')) {

      this.productoService.eliminar(id).subscribe(() => {
        this.cargarProductos();
      });

    }
  }
}