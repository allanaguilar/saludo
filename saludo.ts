import { Component } from '@angular/core';

/**
 * Generated class for the SaludoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'saludo',
  templateUrl: 'saludo.html'
})
export class SaludoComponent {

  text: string;

  constructor() {
    console.log('Hello SaludoComponent Component');
    this.text = 'Hello World';
  }

}
