import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reto1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reto1.component.html',
  styleUrl: './reto1.component.css'
})
export class Reto1Component {
  email: string = '';
  password: string = '';
  repeatp: string = '';
  validar(): void {
    if (this.password === this.repeatp) {
      alert("Bienvenido");
    } else {
      alert("Acceso inválido");
    }
  }
}
