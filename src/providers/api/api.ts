import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  public apiURL = 'http://192.168.1.108:3333/incidents';

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  public async getIncidents() {
    const incidents = await this.http.get(this.apiURL).toPromise();

    return incidents;
  }

  public getHeaders() {
    this.http.get(this.apiURL, { observe: 'response' }).subscribe(
      response => {
        console.log(response.headers.get('x-Total-Count'));
        console.log(response.headers['X-Total-Count']);
      }, error => {
        console.error(error);
      }
    );
  }

}
