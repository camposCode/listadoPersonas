import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'listado de personas';



  personas: Persona[] = [
    new Persona('Jose', 'Campos'),
    new Persona('Nimo', 'Dahan'),
    new Persona ('Byron', 'Polaskirades')
  ];

  personaAgregada(persona: Persona){
    this.personas.push(persona);
  }
}
