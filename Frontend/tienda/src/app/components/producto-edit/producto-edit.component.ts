import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.scss']
})
export class ProductoEditComponent implements OnInit {

  formulario!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private service: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.formulario = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: [''],
      precio: [0, Validators.required],
      cantidad: [0, Validators.required],
      estado: ['Activo']
    });

    this.cargarProducto();
  }

  cargarProducto(): void {

    this.service.obtener(this.id)
      .subscribe(producto => {

        this.formulario.patchValue({
          codigo: producto.codigo,
          nombre: producto.nombre,
          descripcion: producto.descripcion,
          precio: producto.precio,
          cantidad: producto.cantidad,
          estado: producto.estado
        });

      });

  }

  actualizar(): void {

    if(this.formulario.invalid){
      return;
    }

    this.service.actualizar(
      this.id,
      this.formulario.value
    ).subscribe(() => {

      this.router.navigate(['/']);

    });

  }

}