/*export interface Peliculas {
  id: number;
  titulo: string;
  director: string;
  año: number;
  tiempo: number;
  genero: string;
  valoracion: number;
  disponible: boolean;
  img_hero: string;
  img_grid: string;
}*/
export class Peliculas {
  
  id: number = 0;
  titulo: string = "";
  director: string = "";
  año: number = 0;
  tiempo: number = 0;
  genero: string  = "";
  valoracion: number = 0;
  disponible: boolean = false;
  img_hero: string  = "";
  img_grid: string  = "";

  constructor(id: number,titulo: string, director: string, año: number, tiempo: number, genero: string, valoracion: number, disponible: boolean, img_hero: string, img_grid: string) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.año = año;
    this.tiempo = tiempo;
    this.genero = genero;
    this.valoracion = valoracion;
    this.disponible = disponible;
    this.img_hero = img_hero;
    this.img_grid = img_grid;
  }
  
}
