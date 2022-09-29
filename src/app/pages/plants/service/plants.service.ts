import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
// import { TemplateService } from "../../../services/template.service";
import { Plants } from "../model/Plants";
@Injectable({
  providedIn: 'root'
})
export class PlantsService /*extends TemplateService<Plants>*/{
  basePath = 'http://localhost:50184/plants/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error ocurred: ${error.error.message}`);
    }
    else {
      console.error(`Backend returned code ${error.status}, body was ${error.error}`);
    }

    return throwError('Something happened with request, please try again later');
  }

  // Create Plants
  create(item: any): Observable<Plants> {
    return this.http.post<Plants>(this.basePath, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2), 
      catchError(this.handleError));
  }

  // Get Plants By Id
  getById(id: any): Observable<Plants> {
    return this.http.get<Plants>(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  // Get All Plantss
  getAll(): Observable<Plants> {
    return this.http.get<Plants>(`${this.basePath}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  // Update Plants
  update(id: any, item: any): Observable<Plants> {
    return this.http.put<Plants>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  // Delete Plants
  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
}
