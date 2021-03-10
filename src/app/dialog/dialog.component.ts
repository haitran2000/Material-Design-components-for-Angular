import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
  }

}
@Component({
  selector: 'dialog-content-example',
  templateUrl: './dialog-content-example.component.html',
})
export class DialogContentExampleComponent {}
