import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
})
export class HouseComponent implements OnInit {
  imagens = [
    {
      img1: '/assets/Pruebas FrontEnd/9.png',
    },
    {
      img2: '/assets/Pruebas FrontEnd/Group 44.png',
    },
    {
      img3: '/assets/Pruebas FrontEnd/Group 56.png',
    },
    {
      img4: '/assets/Pruebas FrontEnd/Group 57.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
