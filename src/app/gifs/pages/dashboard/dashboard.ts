import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SideMenuHeaderComponent } from '../../components/side-menu/side-menu-header/side-menu-header';
import { SideMenuOptionsComponent } from '../../components/side-menu/side-menu-options/side-menu-options';
import { SideMenuComponent } from '../../components/side-menu/side-menu';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export default class DashboardComponent {}
