import { Component, Input } from '@angular/core';
import { Peliculas } from '../../model/peliculas';
import { PELICULAS_DATA } from '../../data/peliculas.data'
import { PTarjeta } from '../p-tarjeta/p-tarjeta';

@Component({
  imports: [PTarjeta],
  selector: 'app-catalogo',
  styleUrl: './catalogo.css',
  templateUrl: './catalogo.html',
})
export class Catalogo {

  ListaPeliculas: Peliculas[] = PELICULAS_DATA;

}
