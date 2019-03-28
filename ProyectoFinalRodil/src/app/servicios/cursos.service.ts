import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  cursos : any [] = [
    {
      id:"0",
      nombre: "Children III",
      inicio: "03/04/19",
      dias: "Miercoles 18-20hs",
      
      profesor: "Alejandra Tealdi",
      valor:"1300"
    },
    {
      id:"1",
      nombre: "Level I",
      inicio: "01/04/19",
      dias: "Lunes y Miércoles 18-19 hs",
      
      profesor: "Yanina Elena",
      valor:"1700"
    },
    {
      id:"2",
      nombre: "Level II",
      inicio: "06/04/19",
      dias: "Sabados 11-13hs",
      
      profesor: "Dafne Rodil",
      valor:"1800"
    },
    {
      id:"3",
      nombre: "Intermediate I",
      inicio: "02/04/19",
      dias: "Martes y Jueves 19-20hs",
      
      profesor: "Ayelen Lescano",
      valor:"2500"
    },
    {
      id:"4",
      nombre: "Intermediate II",
      inicio: "02/04/19",
      dias: "Viernes 19-21hs",
      
      profesor: "Yanina Pereyra",
      valor:"2500"
    },
    {
      id:"5",
      nombre: "FCE",
      inicio: "02/04/19",
      dias: "Martes y Jueves 20-21hs",
      
      profesor: "Gisele Benicelli",
      valor:"2500"
    }
  ];
  constructor() { }
  getCursos(){
    return this.cursos;
  }

  getCurso(idx : number){
    return this.cursos[idx];

  }

}



