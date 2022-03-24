import { Promotion } from "../models/promotion";
import {Observable} from "rxjs"
import {catchError, map} from "rxjs/operators"
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProcessHTTPMsgService} from "./process-httpmsg.service";
import {baseUrl} from "../shared/apiurl";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseUrl + 'promotions')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.http.get<Promotion>(baseUrl + 'promotions/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion[]>(baseUrl + 'promotions?featured=true').pipe(map(promotion => promotion[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
