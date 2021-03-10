import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-progressspinner',
  templateUrl: './progressspinner.component.html',
  styleUrls: ['./progressspinner.component.css']
})
export class ProgressspinnerComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  constructor() { }

  ngOnInit(): void {
  }

}
