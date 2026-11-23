export class Peliculas {
  
  id: number = 0;
  titulo: string = "";
  director: string = "";
  ano: number = 0;
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
    this.ano = año;
    this.tiempo = tiempo;
    this.genero = genero;
    this.valoracion = valoracion;
    this.disponible = disponible;
    this.img_hero = img_hero;
    this.img_grid = img_grid;
  }
  
  //===== GETTERS =====\\
  // ID de la pelicula
  getId(): number {
    return this.id;
  }

  // Titulo de la pelicula
  getTitulo(): string {
    return this.titulo;
  }

  // Director de la pelicula
  getDirector(): string {
    return this.director;
  }

  // Año de la pelicula
  getAno(): number {
    return this.ano;
  }

  // Tiempo de la pelicula en minutos
  getTiempoMinutos(): number {
    return this.tiempo;
  }

  // Tiempo de la pelicula en formato 'horas:minutos'
  getTiempo(): string {
    let n = this.tiempo;
    let horas = Math.floor(n / 60);
    let minutos = n % 60;
    return `${horas}h ${minutos}m`;
  }

  // Genero de la pelicula
  getGenero(): string {
    return this.genero;
  }

  // Valoracion de la pelicula
  getValoracion(): number {
    return this.valoracion;
  }

  // Disponibilidad de la pelicula
  getDisponible(): boolean {
    return this.disponible;
  }

  // Imagen de la pelicula en formato hero
  getImgHero(): string {
    return this.img_hero;
  }
  // Imagen de la pelicula en formato grid
  getImgGrid(): string {
    return this.img_grid;
  }

}
