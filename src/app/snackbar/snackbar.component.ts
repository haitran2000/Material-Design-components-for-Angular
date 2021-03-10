import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  ngOnInit(): void {
  }

}
@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: './snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}
