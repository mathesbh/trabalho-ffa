import axios from "axios";

export class Api{
  static baseUrl = 'https://covid-api.mmediagroup.fr/v1';

  static getBrazil(){
    return axios.get(`${this.baseUrl}/cases?country=Brazil`)
  }

}