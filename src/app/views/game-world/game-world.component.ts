// Core
import { Component, AfterViewInit } from '@angular/core';

// App Init Functions
import { gameInit } from '../../game/game';


@Component({
  selector: 'app-game-world',
  templateUrl: './game-world.component.html',
  styleUrls: ['./game-world.component.scss']
})

export class GameWorldComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    gameInit();
  }
}
