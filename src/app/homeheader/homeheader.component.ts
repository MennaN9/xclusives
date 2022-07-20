import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DragScrollComponent } from 'ngx-drag-scroll';
// import * as Aos from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GetAllDataWeb } from '../models/viewModel/get-all-data-web';
import { TransferDataService } from '../services/transfer-data.service';



@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss'],
})
export class HomeheaderComponent implements OnInit {
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  //tabs = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven'];
  categories = ['All', 'Desserts', 'Specials', 'Dining', 'Entertainment', 'Automotive', 'Pharmacies', 'Labs', 'Fashion', 'Footwear', 'Eywear', 'Home', 'Beauty', 'Travel', 'Hospital', 'Dental', 'Medical']
  tabs = [
    {
      title: 'Monthly Deals',
      child: [
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        }, {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
      ]
    },
    {
      title: 'Desserts',
      child: [
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        }, {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
      ]
    },
    {
      title: 'Specials',
      child: [
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        }, {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
      ]
    },
    {
      title: 'Dining',
      child: [
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        }, {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
      ]
    },
    {
      title: 'Entertainment',
      child: [
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        }, {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
      ]
    },
    {
      title: 'Automotive',
      child: [
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        }, {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
      ]
    },
    {
      title: 'Pharmacies',
      child: [
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        }, {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
      ]
    },
    {
      title: 'Labs',
      child: [
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        }, {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
      ]
    },
    {
      title: 'Fashion',
      child: [
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        }, {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
      ]
    },
    {
      title: 'Footwear',
      child: [
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        }, {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
      ]
    },
    {
      title: 'Eywear',
      child: [
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        }, {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
      ]
    },
    {
      title: 'Home',
      child: [
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        }, {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
      ]
    },
    {
      title: 'Beauty',
      child: [
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        }, {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
      ]
    },
    {
      title: 'Travel',
      child: [
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        }, {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
      ]
    },
    {
      title: 'Hospital',
      child: [
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        }, {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
      ]
    },
    {
      title: 'Dental',
      child: [
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        }, {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
      ]
    },
    {
      title: 'Medical',
      child: [
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        }, {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
        {
          img: '../../../assets/img/Logo_2019_12_25_035514_Mazaya Logo (1).jpg',
          price: 1000,
          name: 'Mazaya'
        },
      ]
    },

  ]
  tab: any;
  dir: string = "ltr";
  @ViewChild('tabGroup')
  tabGroup: any;

  getAllDataWeb: GetAllDataWeb = new GetAllDataWeb();
  constructor(private router: Router,
    public service: TransferDataService) {

  }
  // @Input() moviesFromParent: any[] = [];

  customOptions1: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    center: false,
    dots: false,
    autoHeight: false,
    autoWidth: false,
    rtl: true,
    navSpeed: 700,
    navText: ['', ''],
    margin: 8,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      992: {
        items: 6,
      },
    },
    nav: false,
  };

  ngOnInit() {
    window.scrollTo(0, 0);
    this.dir = document.dir;
    this.service.GetAlldata().subscribe(
      res => {
        this.getAllDataWeb = res.Data;
      });
  }
  onTabClick(event: any) {
    console.log(event);
    console.log(event.tab.textLabel);
    window.dispatchEvent(new Event('resize'));
    this.scrollTabs(event);
  }

  public ngAfterViewInit(): void { window.dispatchEvent(new Event('resize')); }

  scrollTabs(event: any) {
    const children = this.tabGroup._tabHeader._elementRef.nativeElement.children;
    const back = children[0];
    const forward = children[1];
    if (event.deltaY > 0) {
      forward.click();
    } else {
      back.click();
    }
  }

  toBrandDetails(chainID: number = 0) {
    this.router.navigate(['/brandDetails', chainID]);
  }

}
