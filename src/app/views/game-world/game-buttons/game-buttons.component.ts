import { Component } from '@angular/core';
import { gameButtons } from './gameButtons';

@Component({
  selector: 'game-buttons',
  templateUrl: './game-buttons.component.html',
  styleUrls: ['../game-world.component.scss']
})

export class GameButtonsComponent {
  gameButtons = gameButtons;

  constructor() { }
}
