import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders }    from '@angular/common/http';
import { URL_SERVICE_SEARCH } from 'src/config/url.services';

@Injectable()
export class SearchService{

    //API_KEY Hardcoded sorry
    protected API_KEY = 'eqVknfC28zmXQ0Vdab9AfrhZ39YRsxlvv8DayEUC';

    constructor(public http: HttpClient){
    }

    public _addStandardHeaders(header:HttpHeaders)
    {
      header = header.append('Content-Type','application/json');      
      return header;
    }

    postSearchFood(e){
        let data = {
            "generalSearchInput": e
        };
        let headers = {
            'Content-Type': 'application/json'
        };
        this.http.post(URL_SERVICE_SEARCH + '/search?' + 'api_key=' + this.API_KEY, data).subscribe(
            data => {
                localStorage.setItem('foods', JSON.stringify(data));
            }, error => {
                console.log(error);
            }
        );
    }
}