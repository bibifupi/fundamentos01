import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reto2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reto2.component.html',
  styleUrl: './reto2.component.css'
})
export class Reto2Component {
  descripcion: string = '';
  codigo: number = 0;
  precioc: number = 0;
  preciov: number = 0;
  stock: number = 0;
  validar(): void {
    if (this.precioc > 0 && this.preciov > 0 && this.stock > 0) {
      alert("Producto dado de alta");
    } else {
      alert("Los precios y el Stock deben ser mayores a 0");
    }
  }
}
