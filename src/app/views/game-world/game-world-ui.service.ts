// Core
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameWorldUiService {
  constructor() {}

  // Observable sources: Last taken gameplay action
  private lastGameplayAction = new Subject<{icon: string, successColor: string,
    failColor: string, successText: string, failText: string}>();
  private lastGameplayActionResult = new Subject<number>();

  // Observable streams: Last taken gameplay action
  lastGameplayAction$ = this.lastGameplayAction.asObservable();
  lastGameplayActionResult$ = this.lastGameplayActionResult.asObservable();

  // Service message commands
  updateLastGameplayAction(action: {icon: string, successColor: string, failColor: string,
    successText: string, failText: string}) { this.lastGameplayAction.next(action); }
  updateLastGameplayActionResult(result: number) { this.lastGameplayActionResult.next(result); }
}
