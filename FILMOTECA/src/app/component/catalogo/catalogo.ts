import { Component, Input, computed, signal  } from '@angular/core';
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
  
  //=== GETTERS ===\\
  // Numero TOTAL Peliculas disponibles
  getTotalDisponibles(Peliculas: Peliculas[]): number {
    let n = 0;
    for (let i = 0; i < Peliculas.length; i++) {
      if (Peliculas[i].disponible) {n++};
    }
    return n;
  } 

  // Tiempo para ver TODAS LAS PELIS!!!
  getTotalHoras(Peliculas: Peliculas[]): string {
    let t = 0;
    for (let i = 0; i < Peliculas.length; i++) {
      t = Peliculas[i].getTiempoMinutos() + t;
    }
    // Convierte en formato H y M
    let horas = Math.floor(t / 60);
    let minutos = t % 60;
    return `${horas}h ${minutos}m`;
  }

 busqueda = signal('');

  // Se recalcula sola cuando cambia busqueda()
  peliculasFiltradas = computed(() => {
    const texto = this.busqueda().trim().toLowerCase();
    if (!texto) return this.ListaPeliculas;

    return this.ListaPeliculas.filter(p =>
      p.getTitulo().toLowerCase().includes(texto) 
    );
  });
}