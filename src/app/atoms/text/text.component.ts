import {Component, Input} from '@angular/core';

type FontSize = 'font_48' | 'font_16' |  'font_14' | 'font_12' | 'font_10';
type LineHeight = 'lh_1-2' |  'lh_1-5';
type FontWeight = 'fw_800' | 'fw_400';
type FontColor = 'fc_black' | 'fc_purple' | 'fc_grey' | 'fc_red';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent {
  @Input({ required: true }) text: string = '';
  @Input() fontSize: FontSize = 'font_14';
  @Input() lineHeight: LineHeight = 'lh_1-2';
  @Input() fontWeight: FontWeight = 'fw_400';
  @Input() fontColor: FontColor = 'fc_black';
}
