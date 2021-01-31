import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { Song } from '../models/Song';
import { FormControl } from '@angular/forms';
import { catchError, retry } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }
  Url = ' https://itunes.apple.com/search?term=';
  getSongs(search:String) {
    return this.http.get(this.Url+search+'&kind=song'+'&enitity=album&limit=25');
  }
  /*search(search:String){
    return this.http.get(this.Url+search+'&kind=song'+'&enitity=album');

  }*/
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(error.error.message)

    } else {
      console.log(error.status)
    }
    return throwError(
      console.log('Something is wrong!'));
  };
}
