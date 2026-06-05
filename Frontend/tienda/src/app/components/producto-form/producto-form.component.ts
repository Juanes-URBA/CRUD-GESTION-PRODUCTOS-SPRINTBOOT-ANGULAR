import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';

import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.scss']
})
export class ProductoFormComponent {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ProductoService,
    private router: Router
  ) {

    this.formulario = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: [''],
      precio: [0, Validators.required],
      cantidad: [0, Validators.required],
      estado: ['Activo']
    });

  }

  guardar(): void {

    if(this.formulario.invalid) return;

    this.service.crear(this.formulario.value)
      .subscribe(() => {
        this.router.navigate(['/']);
      });

  }
}