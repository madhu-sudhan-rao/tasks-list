import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-list-card',
  templateUrl: './default-list-card.component.html',
  styleUrls: ['./default-list-card.component.scss']
})
export class DefaultListCardComponent {
  @Input() count: number = 0;
  @Input() title!: string;
  @Input() iconName!: string;
  @Input() class!: string;

}
