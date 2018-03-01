import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BusinessLogicService } from './business-logic.service';
import { InjectedLogicService } from './injected-logic.service';

class MockedInjectedService extends InjectedLogicService {
  doInjectedStuff() {
    return 'mocked';
  }
}

describe('BusinessLogicService', () => {
  let service: BusinessLogicService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [BusinessLogicService,
        {provide: InjectedLogicService, useClass: MockedInjectedService}
      ],
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    service = injector.get(BusinessLogicService);
    httpMock = injector.get(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the mocked injected service', () => {
    const result = service.methodWithInjectedService();
    expect (result).toBe('mocked');
  });

  it('should call the api', () => {
    const mockedUsers = [
      { login: 'Manny', role: 'Mechanic'},
      { login: 'Moe', role: 'Mechanic'},
      { login: 'Jack', role: 'Mechanic'}
    ];

    service.useHttpClient().subscribe(listOfUsers => {
      expect(listOfUsers).toBeTruthy();
    });

    const req = httpMock.expectOne('https://api.gitub.com/users');
    expect(req.request.method).toBe('GET');
     req.flush(mockedUsers);
  });
});
