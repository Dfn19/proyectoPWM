import { CursoService } from '../../servicios/cursos.service';
import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
  curso : any = {};
  constructor(private activatedRoute : ActivatedRoute, private _CursoService : CursoService) { 

    this.activatedRoute.params.subscribe(params => {
      this.curso = this._CursoService.getCurso(params['id']);
      console.log(this.curso);
    });
  }



}
