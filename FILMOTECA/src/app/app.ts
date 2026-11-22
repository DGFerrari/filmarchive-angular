import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Peliculas } from './model/peliculas';
import { PELICULAS_DATA } from './data/peliculas.data'
import { Catalogo } from './component/catalogo/catalogo';

@Component({
  imports: [RouterOutlet, Catalogo],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('FILMOTECA');

  ListaPeliculas: Peliculas[] = PELICULAS_DATA;
  
}
