import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatDialogContent, MatFormFieldModule, MatInputModule, MatFormField, FormsModule,MatDialogModule, MatButtonModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
  name: string = ""

  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<DialogAddPlayerComponent>){}

  onNoClick() {
    this.dialogRef.close()
  }
}
