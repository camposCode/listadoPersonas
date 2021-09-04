import { EventEmitter, Injectable } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingServiceService } from './logging-service.service';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  personas: Persona[] = [
    new Persona('Jose', 'Campos'),
    new Persona('Nimo', 'Dahan'),
    new Persona ('Byron', 'Polaskirades')
  ];

  saludar = new EventEmitter<number>();

  constructor(private loggingService: LoggingServiceService){}

  agregarPersona(persona: Persona){
    this.loggingService.enviarMensajeConsola("agregamos a: " + persona.nombre);
    this.personas.push(persona);
  }

}
