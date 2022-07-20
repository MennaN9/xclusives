import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { GetAllDataWeb } from '../models/viewModel/get-all-data-web';
import { TransferDataService } from '../services/transfer-data.service';
import { CategoryWeb } from '../models/viewModel/chain-category';
import { Router } from '@angular/router';
import { OfferWeb } from '../models/viewModel/offer web';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-alldeals',
  templateUrl: './alldeals.component.html',
  styleUrls: ['./alldeals.component.scss']
})
export class AlldealsComponent implements OnInit {
  offerWeb: OfferWeb[] = [];
  offerWebCurrent: OfferWeb[] = [];
  offerWebSearch: OfferWeb[] = [];
  dir: string = "ltr";
  //searchValue?: string;
  getAllDataWeb: GetAllDataWeb = new GetAllDataWeb();
  idClick?: number;
  chainNameSearch: string = "";
  firstTime: boolean = true;

  constructor(public dialog: MatDialog,
    private router: Router,
    public service: TransferDataService) { }
  ngOnInit(): void {
    this.dir = document.dir;
    this.service.GetOffers(0).subscribe(
      res => {
        this.offerWeb = res.Data;
        this.offerWebCurrent = [...this.offerWeb]
        console.log(this.offerWeb);
      });
    this.service.GetAlldata().subscribe(
      res => {
        this.getAllDataWeb = res.Data;
      });
  }
  customOptions1: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    rtl: true,
    navSpeed: 600,
    navText: ['', ''],
    margin: 8,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 4,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
  };
  activeSlides?: SlidesOutputData;


  getData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }
  onSlideChange(e: any, categoryId: number) {
    this.firstTime = true;
    this.idClick = categoryId;
    this.offerWeb = this.offerWebCurrent.filter(x => x.CategoryIds.includes(categoryId))
  }
  toBrandDetails(chainID: number = 0) {
    this.router.navigate(['/brandDetails', chainID]);
  }
  mostPopular() {
    this.firstTime = true;
    this.offerWeb = this.offerWeb.sort((a, b) => b.OfferWeight - a.OfferWeight);
  }
  aToZ() {
    this.firstTime = true;
    if (this.dir == "ltr")
      this.offerWeb = this.offerWeb.sort((a, b) => a.ChainNameEN.localeCompare(b.ChainNameEN))
    else {
      this.offerWeb = this.offerWeb.sort((a, b) => a.ChainNameAR.localeCompare(b.ChainNameAR))
    }
  }
  bestValue() {
    this.firstTime = true;
    this.offerWeb = this.offerWeb.sort((a, b) => b.Value - a.Value)
  }
  onButtonGroupClick($event: any) {
    let clickedElement = $event.target || $event.srcElement;

    if (clickedElement.nodeName === "BUTTON") {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }

      clickedElement.className += " active";
    }

  }

  search() {
    if (this.firstTime)
      this.offerWebSearch = [...this.offerWeb];
    this.firstTime = false;
    this.offerWeb = this.offerWebSearch.filter(x => x.ChainNameEN.toLowerCase().startsWith(this.chainNameSearch.toLowerCase()) || x.ChainNameAR.toLowerCase().startsWith(this.chainNameSearch.toLowerCase()))
  }
  onClose() {
    // this.chainNameSearch = '';
    // this.offerWeb = this.offerWebSearch;
  }




}
