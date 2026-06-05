import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }
}
export interface Producto {
  id?: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  precio: number;
  cantidad: number;
  estado: string;
}
