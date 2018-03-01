import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InjectedLogicService } from './injected-logic.service';

@Injectable()
export class BusinessLogicService {

  private readonly baseApi = 'https://api.gitub.com';

  constructor(private injectedService: InjectedLogicService, private http: HttpClient) { }

  methodWithInjectedService() {
    return this.injectedService.doInjectedStuff();
  }

  useHttpClient() {
    return this.http.get<any[]>(`${this.baseApi}/users`);
  }
}


