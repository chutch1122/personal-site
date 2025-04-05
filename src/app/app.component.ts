import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavItemComponent } from './common/nav/nav-item/nav-item.component';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavItemComponent, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly _router: Router = inject(Router);
  private readonly _path$ = this._router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => this._router.routerState.root.firstChild),
    mergeMap(route => route ? route.url : []),
    map(url => url[0]?.path || ''),
  );

  path = toSignal(this._path$, {initialValue: ''});
  isSidebarOpen = signal(false);

  isCurrent(path: string): boolean {
    return this.path().includes(path);
  }

  toggleSidebar() {
    this.isSidebarOpen.update(value => !value);
  }
}
