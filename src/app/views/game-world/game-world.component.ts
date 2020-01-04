// Core
import { Component, OnInit } from '@angular/core';

// App
//import { gameInit } from '../../game/game';

@Component({
  selector: 'app-game-world',
  templateUrl: './game-world.component.html',
  styleUrls: ['./game-world.component.scss']
})

export class GameWorldComponent implements OnInit {
  constructor() {}
  ngOnInit() {/*gameInit();*/}

  // Game World Events
  receiveGameplayActionEvent(event1: {action: string, result: number}) {
    
  }
}
