import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,

} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
const options = {
  method: 'GET',
  url: 'https://dad-jokes.p.rapidapi.com/random/joke',
  headers: {
    'X-RapidAPI-Key': '2a6c0a160amshc9bae799e78951cp16ee05jsneb8a8d436c44',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
    useQueryString: true
  }
};

const headers= new HttpHeaders()
.set('content-type', 'application/json')
.set('Access-Control-Allow-Origin', '*')
.set('X-RapidAPI-Key','2a6c0a160amshc9bae799e78951cp16ee05jsneb8a8d436c44')
.set('X-RapidAPI-Host','dad-jokes.p.rapidapi.com');




@Injectable({
  providedIn: 'root'
})
export class JokeServicesService {

  constructor(private http: HttpClient, private router: Router,) { }

  getJoke(): Observable<any> {
    let url = `${environment.mockApiUrl}random/joke`;
    console.log(url);

    return this.http.get(url,{'headers':headers}).pipe(catchError(this.errorMgmt));
  }

  getJokeByCount(count:any): Observable<any> {
    let url = `${environment.mockApiUrl}random/joke?count=`+count;
    return this.http.get(url,{'headers':headers}).pipe(catchError(this.errorMgmt));
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
