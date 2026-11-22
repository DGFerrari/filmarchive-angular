import { Component, Input } from '@angular/core';
import { Peliculas } from '../../model/peliculas';

@Component({
  imports: [],
  selector: 'app-p-tarjeta',
  styleUrl: './p-tarjeta.css',
  templateUrl: './p-tarjeta.html',
})
export class PTarjeta {

 @Input() pelis! : Peliculas;
 @Input() numLista! : number;

}
