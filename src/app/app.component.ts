import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  titulo = 'listado de personas';
  personas: Persona[] = [];

  constructor(
    private personasService: PersonasService
  ){}

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }
}
