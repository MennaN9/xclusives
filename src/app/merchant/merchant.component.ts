import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatHorizontalStepper;
  constructor(private _formBuilder: FormBuilder) { }
  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    Bname: ['', Validators.required],
    Cname: ['', Validators.required],
    Nbranches: ['', Validators.required],
    website: ['', Validators.required],
  });
  isEditable = false;
  validatePersionAddress: boolean = false;
  ngOnInit(): void {
  }

}
