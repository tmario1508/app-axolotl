import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  personaje = [
    {
      id: '1',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male'
    },
    {
      id: '2',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Male'
    },

  ]
 

  constructor(
    private personajeService: PersonajesService
  ) { }

  ngOnInit(): void {

    this.personajeService.getAllPersonajes()
    .subscribe(data => {
      this.personaje = data
      console.log(this.personaje)
    })
  }

}
