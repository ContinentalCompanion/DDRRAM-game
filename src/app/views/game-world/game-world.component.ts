import { Component, OnInit } from '@angular/core';
import { gameInit } from '../../game/game';

@Component({
  selector: 'app-game-world',
  templateUrl: './game-world.component.html',
  styleUrls: ['./game-world.component.scss']
})

export class GameWorldComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    //gameInit();
  }

}
