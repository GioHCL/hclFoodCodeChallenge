import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders }    from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { URLSearchParams } from 'url';
import { URL_SERVICE_REPORTS } from 'src/config/url.services';

@Injectable()
export class reportService{

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(public http: HttpClient){
        console.log('Hello from report service!');
    }
}