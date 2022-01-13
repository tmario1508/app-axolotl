import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Personaje } from '../models/personaje.model';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPersonajes() {
    return this.http.get<Personaje[]>('https://rickandmortyapi.com/api/character')
  }

}
