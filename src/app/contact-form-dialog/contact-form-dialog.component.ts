import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  MAT_FORM_FIELD,
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-contact-form-dialog',
  imports: [MatDialogContent, MatDialogActions, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatButtonModule, MatDialogClose],
  templateUrl: './contact-form-dialog.component.html',
  styleUrl: './contact-form-dialog.component.scss'
})
export class ContactFormDialogComponent {
  contactForm: FormGroup = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl('', [Validators.required, Validators.email]),
  });
}