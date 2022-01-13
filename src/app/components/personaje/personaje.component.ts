import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent implements OnInit {

  @Input() personaje = {
    id: '',
    image: '',
    name: '',
    status: '',
    species: '',
    gender: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
