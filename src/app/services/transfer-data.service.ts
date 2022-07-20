import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AllDataOFChainWeb } from '../models/viewModel/all-data-ofchain-web';
import { EvoucherWeb } from '../models/viewModel/evoucherWeb';
import { GetAllDataWeb } from '../models/viewModel/get-all-data-web';
import { OfferWeb } from '../models/viewModel/offer web';
import { ResponseModel } from '../models/viewModel/response-model';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {

  constructor(private _httpClient: HttpClient) { }


  GetAlldata(): Observable<ResponseModel<GetAllDataWeb>> {
    return this._httpClient.get<ResponseModel<GetAllDataWeb>>(`${environment.apiUrl}/TransferDataWeb/GetAlldata`);
  }

  GetChainAllData(ChainID: number): Observable<ResponseModel<AllDataOFChainWeb[]>> {
    return this._httpClient.get<ResponseModel<AllDataOFChainWeb[]>>(`${environment.apiUrl}/TransferDataWeb/GetChainAllData?ChainID=${ChainID}`);
  }

  GetOffers(ChainID: number): Observable<ResponseModel<OfferWeb[]>> {
    return this._httpClient.get<ResponseModel<OfferWeb[]>>(`${environment.apiUrl}/TransferDataWeb/GetOffers?ChainID=${ChainID}`);
  }

  GetEvouchers(ChainID: number): Observable<ResponseModel<EvoucherWeb[]>> {
    return this._httpClient.get<ResponseModel<EvoucherWeb[]>>(`${environment.apiUrl}/TransferDataWeb/GetEvouchers?ChainID=${ChainID}`);
  }
}
