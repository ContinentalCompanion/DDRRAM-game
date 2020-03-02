// Core
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameActionService {
  constructor() {}

  // Observable sources: Last taken gameplay action
  private action = new Subject<string>();
  private result = new Subject<number>();
  private dialogBox = new Subject<{
    icon: string,
    successColor: string,
    failColor: string,
    successText: string,
    failText: string}>();
  

  // Observable streams: Last taken gameplay action
  action$ = this.action.asObservable();
  result$ = this.result.asObservable();
  dialogBox$ = this.dialogBox.asObservable();
  
  
  // Service message commands
  updateAction(action: string)
    { this.action.next(action); }

  updateResult(result: number) 
    { this.result.next(result); }

  updateDialogBox(dialogBox: {
    icon: string,
    successColor: string,
    failColor: string,
    successText: string,
    failText: string})
      { this.dialogBox.next(dialogBox); }
}
