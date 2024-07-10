import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 6000,
    horizontalPosition: 'right',
    verticalPosition: 'bottom',
  }
  
  success(msg:any) {
    this.config.panelClass = ['success-snackbar']
    this.snackBar.open(msg, '',this.config);
  }

  update(msg:any) {
    this.config.panelClass = ['update-snackbar']
    this.snackBar.open(msg, '', this.config);
  }

  remove(msg:any) {
    this.config.panelClass = ['remove-snackbar']
    this.snackBar.open(msg, '', this.config);
  }
}
