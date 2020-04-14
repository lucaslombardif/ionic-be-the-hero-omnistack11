import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class ApiProvider {

  public apiURL = 'http://192.168.1.108:3333/incidents';
  public totalIncidents;

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  public async getIncidents() {
    const incidents = await this.http.get(this.apiURL).toPromise();

    return incidents;
  }

  public async getCount() {
    await axios.get(this.apiURL).then((response) => {
      this.totalIncidents = response.headers['x-total-count'];
    }).catch((err) => {
      return err;
    })
    return this.totalIncidents;
  }

}
