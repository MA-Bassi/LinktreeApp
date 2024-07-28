import {Component, inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {DashLink} from "../../constants/links.constant";

@Component({
  selector: 'app-link-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './link-dialog.component.html',
  styleUrl: './link-dialog.component.scss'
})
export class LinkDialogComponent implements OnInit {
  linkForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    url: new FormControl(''),
  });
  readonly dialogRef = inject(MatDialogRef<LinkDialogComponent>);
  readonly data = inject<DashLink | undefined>(MAT_DIALOG_DATA);

  constructor() {
      // constructor code here
  }

  onCancel(): void {
    this.linkForm.reset();
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.linkForm.valid) {
      this.dialogRef.close(this.linkForm.value);
    }
  }

  ngOnInit(): void {
    if(this.data) {
      this.linkForm.patchValue(this.data);
    }
  }
}
