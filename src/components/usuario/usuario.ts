import { Component } from '@angular/core';

/**
 * Generated class for the UsuarioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'usuario',
  templateUrl: 'usuario.html'
})
export class UsuarioComponent {

  text: string;

  constructor() {
    console.log('Hello UsuarioComponent Component');
    this.text = 'Hello World';
  }

}
