import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-applycard',
  templateUrl: './applycard.component.html',
  styleUrls: ['./applycard.component.scss']
})
export class ApplycardComponent implements OnInit {
  form = this._formBuilder.group({
    first: ['', Validators.required],
    second: ['', Validators.required],
    third: ['', Validators.required],
  });
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
