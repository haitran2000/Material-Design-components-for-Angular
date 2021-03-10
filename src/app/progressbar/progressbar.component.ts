import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
}
