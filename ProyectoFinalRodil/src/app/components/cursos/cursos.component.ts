import { CursoService } from '../../servicios/cursos.service'; 
import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos : any [] = [];

  
  constructor(private _CursoService : CursoService,private router: Router) { 

  }
  
  ngOnInit() {
    this.cursos = this._CursoService.getCursos();
    
  
  }

  verCurso(idx : number) {
    console.log(idx);
    this.router.navigate(['/curso',idx]);
  }

  


}
