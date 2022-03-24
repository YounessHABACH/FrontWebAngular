import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import {Feedback} from "../models/feedback";
import {baseUrl} from "../shared/apiurl";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService)  { }

  submitFeedback(feedback: Feedback): Observable<Feedback> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<Feedback>(baseUrl + 'feedback', feedback, httpOptions)
      // Status: 201 = Success, {firstname: "Maris", lastname: "Pulk", telnum: "0000", email: "marispulk@gmail.com", agree: true, …}
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}

