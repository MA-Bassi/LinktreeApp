import {Component, inject, Input, WritableSignal} from '@angular/core';
import {TextComponent} from "../../atoms/text/text.component";
import {MatSlideToggleChange, MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {LinkService} from "../../services/link.service";
import {LinkDialogComponent} from "../link-dialog/link-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dash-link-card',
  standalone: true,
  imports: [
    TextComponent,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './dash-link-card.component.html',
  styleUrl: './dash-link-card.component.scss'
})
export class DashLinkCardComponent {
  @Input({ required: true }) index: number = 0;
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) url: string = '';
  @Input({ required: true }) isActive: boolean = false;
  @Input({ required: true }) isLocked: boolean = false;
  readonly dialog = inject(MatDialog);

  constructor(private linkService: LinkService) {
  }

  onActiveChange(event: MatSlideToggleChange) {
    this.linkService.editLink({title: this.title, url: this.url, isActive: event.checked, isLocked: this.isLocked }, this.index)
  }

  onLockedChange() {
    this.linkService.editLink({title: this.title, url: this.url, isActive: this.isActive, isLocked: !this.isLocked }, this.index)

  }

  onRemove(){
    this.linkService.removeLink(this.index);
  }

  onEdit() {
    const dialogRef = this.dialog.open(LinkDialogComponent, {
      data: { title: this.title, url: this.url, isActive: this.isActive },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.linkService.editLink({ ...result, isActive: this.isActive }, this.index);
      }
    });
  }
}
