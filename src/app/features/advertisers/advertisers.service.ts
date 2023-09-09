import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AdvertiserModel} from "./models";


@Injectable({
  providedIn: 'root',
})
export class AdvertisersService {
  constructor(private httpCline: HttpClient) {
  }

  public getAdvertisers(): Observable<AdvertiserModel[]> {
    return this.httpCline.post<AdvertiserModel[]>('/api/TestTask/GetTestAdvertisers', {userId: 1112});
  }

  public updateAdvertisers(
    advertiserId: string,
    profit: string,
  ) {
    return this.httpCline.post('/api/TestTask/UpdateTestAdvertiser',
      {
        userId: 1112,
        advertiserId: advertiserId,
        profit: profit
      }
    )
  }
}
