import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ContactFormDialogComponent } from '../contact-form-dialog/contact-form-dialog.component';

@Component({
  selector: 'app-info',
  imports: [MatButtonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  constructor(protected dialog: MatDialog) { }

  public openContactFormDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '800px';
    dialogConfig.maxHeight = '90vh';
    dialogConfig.maxWidth = '90vw';
    const dialogRef = this.dialog.open(ContactFormDialogComponent, dialogConfig);
  }
}
