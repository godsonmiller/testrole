import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //constructor() { }
   constructor(public dialog: MatDialog) {}
   openDialog(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '250px',data: {}}
    });

  ngOnInit() {
  }

}

@Component({
  selector: 'signup.component',
  templateUrl: 'signup.component.html',
})
export class SignupComponent {

  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

}
