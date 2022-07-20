import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxCarousel3dModule } from 'ngx-carousel-3dx';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    MatStepperModule,
    MatInputModule,
    /* TabsModule.forRoot(),*/
    CarouselModule,
    NgxCarousel3dModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatRadioModule
  ],
  exports: [
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatStepperModule,
    MatInputModule,
    CarouselModule,
    NgxCarousel3dModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatRadioModule
  ],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA,
  //   NO_ERRORS_SCHEMA
  // ]
})
export class SharedModule { }
