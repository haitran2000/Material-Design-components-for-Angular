import { Component, OnInit,ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
@Component({
  selector: 'app-expansionpanel',
  templateUrl: './expansionpanel.component.html',
  styleUrls: ['./expansionpanel.component.css']
})
export class ExpansionpanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild(MatAccordion) accordion: MatAccordion;
}
