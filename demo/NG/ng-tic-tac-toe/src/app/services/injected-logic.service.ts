import { Injectable } from '@angular/core';

@Injectable()
export class InjectedLogicService {

  constructor() { }

  doInjectedStuff() {
    return 'implementation';
  }
}
