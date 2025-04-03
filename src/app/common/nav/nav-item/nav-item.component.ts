import { booleanAttribute, Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-item',
  imports: [
    CommonModule,
  ],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css',
})
export class NavItemComponent {
  current = input(false, {transform: booleanAttribute});
  icon = input('');

  hasIcon = computed(() => this.icon() !== '');
}
