import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  enviarMensajeConsola(mensaje:string){
    console.log(mensaje);
  }
  constructor() { }
}
