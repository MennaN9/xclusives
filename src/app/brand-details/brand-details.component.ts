import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllDataOFChainWeb } from '../models/viewModel/all-data-ofchain-web';
import { EvoucherWeb } from '../models/viewModel/evoucherWeb';
import { OfferWeb } from '../models/viewModel/offer web';
import { TransferDataService } from '../services/transfer-data.service';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.scss']
})
export class BrandDetailsComponent implements OnInit {

  allDataOFChainWeb: AllDataOFChainWeb = new AllDataOFChainWeb()
  chainID!: number;
  dir: string = "ltr";
  offerWeb: OfferWeb[] = [];
  evoucherWeb: EvoucherWeb[] = [];
  Latitude: number = 0;
  Longitude: number = 0;

  constructor(private transferDataService: TransferDataService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.chainID = Number(this.route.snapshot.paramMap.get("ChainID")?.toString());
  }

  ngOnInit(): void {

    this.dir = document.dir;
    this.transferDataService.GetChainAllData(this.chainID).subscribe(
      res => {
        this.allDataOFChainWeb = res.Data[0];
        console.log(res.Data);
        console.log("allDataOFChainWeb");
        console.log(this.allDataOFChainWeb);
      },
      err => { },
      () => { this.getOffer(); this.getEvoucher(); }

    );

  }

  getOffer() {
    this.transferDataService.GetOffers(this.allDataOFChainWeb.ChainID).subscribe(
      res => {
        this.offerWeb = res.Data
      }

    )
  }

  getEvoucher() {
    this.transferDataService.GetEvouchers(this.allDataOFChainWeb.ChainID).subscribe(
      res => {
        this.evoucherWeb = res.Data
      }

    )
  }

  getMap(Latitude: number, Longitude: number) {

    this.router.navigate(['/map', { Latitude: Latitude, Longitude: Longitude }]);

  }

}
