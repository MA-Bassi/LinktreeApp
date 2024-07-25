import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  @Input({required: true}) url: string = '';
  @Input({required: true}) placeholder: string = '';
}
