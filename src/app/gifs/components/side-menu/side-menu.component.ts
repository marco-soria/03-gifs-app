import { Component } from '@angular/core';
import { SideMenuHeaderComponent } from './side-menu-header/side-menu-header.component';
import { SideMenuOptionsComponent } from './side-menu-options/side-menu-options.component';

@Component({
  selector: 'app-side-menu',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {}
