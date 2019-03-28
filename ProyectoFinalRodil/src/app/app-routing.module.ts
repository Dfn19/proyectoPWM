import { HeroeComponent } from './components/heroe/heroe.component';
import { AboutComponent } from './components/about/about.component';
import { CursoComponent } from './components/curso/curso.component';
import { HomeComponent } from './components/home/home.component';
import {CursosComponent} from './components/cursos/cursos.component';
import {MainComponent} from './components/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    {path: 'home', component:HomeComponent},
    {path: 'cursos', component:CursosComponent},
    {path: 'curso', component:CursoComponent},
    {path: 'about', component:AboutComponent},
    {path:'curso/:id',component:CursoComponent},
    {path:'heroe',component:HeroeComponent},
    {path:'main',component:MainComponent},


    
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

