import { Injectable } from '@angular/core';

import { throwError as observableThrowError, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


import { HttpClient, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PricingService {

  constructor(private http: HttpClient) { }

  getAllPricingPlans(): Observable<any> {
    const url = '  http://localhost:3000/plans';
    return this.http.get(url)
      .pipe(catchError(error => {
        retry(2);
        return observableThrowError(error);
      })
      );
  }

  subscribeToPlan(planId: number, planName: string): Observable<any> {
    const postObj = { planId, planName, userId: 49 };
    const url = '  http://localhost:3000/subscriptions';
    return this.http.post(url, postObj)
      .pipe(catchError(error => {
        retry(2);
        return observableThrowError(error);
      })
      );
  }


}
