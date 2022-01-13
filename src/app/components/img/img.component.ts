import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  imgDefault = "./assets/img/default.png"

  @Input() img = ''

  constructor() { }

  ngOnInit(): void {
  }


  imgError() {
    this.img = this.imgDefault
  }


}
