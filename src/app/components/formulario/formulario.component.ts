import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from 'src/app/persona.model';
import { LoggingServiceService } from 'src/app/services/logging-service.service';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

 /*  @Output() personaCreada = new EventEmitter<Persona>(); */

  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(
    private loggingService: LoggingServiceService,
    private personasService: PersonasService
  ){
    this.personasService.saludar.subscribe(
      (indice:number) => alert("el indice es: " + (indice + 1)));
  }

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    /* this.personaCreada.emit(persona1); */
    /* this.loggingService.enviarMensajeConsola("enviamos persona: " + persona1.nombre) */
    this.personasService.agregarPersona(persona1);
  }

}
