import {Component, inject, WritableSignal} from '@angular/core';
import {DashLinkUrlSectionComponent} from "../../organisms/dash-link-url-section/dash-link-url-section.component";
import {MatButtonModule} from "@angular/material/button";
import {DashLink} from "../../constants/links.constant";
import {LinkService} from "../../services/link.service";
import {DashLinkCardComponent} from "../../organisms/dash-link-card/dash-link-card.component";
import {MatDialog} from "@angular/material/dialog";
import {LinkDialogComponent} from "../../organisms/link-dialog/link-dialog.component";

@Component({
  selector: 'app-dash-links-page',
  standalone: true,
  imports: [
    DashLinkUrlSectionComponent,
    MatButtonModule,
    DashLinkCardComponent
  ],
  templateUrl: './dash-links-page.component.html',
  styleUrl: './dash-links-page.component.scss'
})
export class DashLinksPageComponent {
  links: WritableSignal<DashLink[]>;
  readonly dialog = inject(MatDialog);

  constructor(private linkService: LinkService) {
    this.links = linkService.getLinks();
  }

  onAddLink() {
    const dialogRef = this.dialog.open(LinkDialogComponent, {
      data: undefined,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.linkService.addLink({ ...result, isActive: false })
      }
    });
  }
}
