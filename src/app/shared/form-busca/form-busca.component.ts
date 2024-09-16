import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.css'
})
export class FormBuscaComponent {
readonly passagem: string[] = ['1 Adulto', 'Econômica']

hideSingleSelectionIndicator = signal(false);


}
