import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  public apiURL = 'http://localhost:3333';

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  public async getIncidents() { 
    const incidents = await this.http.get(this.apiURL + '/incidents').toPromise();

    return incidents;
    
  }

}
