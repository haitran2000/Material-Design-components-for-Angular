import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-slidetoggle',
  templateUrl: './slidetoggle.component.html',
  styleUrls: ['./slidetoggle.component.css']
})
export class SlidetoggleComponent implements OnInit {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  isChecked = true;
  formGroup: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      enableWifi: '',
      acceptTerms: ['', Validators.requiredTrue]
    });
  }

  onFormSubmit() {
    alert(JSON.stringify(this.formGroup.value, null, 2));
  }

  ngOnInit(): void {
  }

}
