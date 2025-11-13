import { Component } from '@angular/core';
import { environment } from '@environments/environment';
//import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-side-menu-header',
  imports: [],
  templateUrl: './side-menu-header.html',
  styleUrl: './side-menu-header.css',
})
export class SideMenuHeaderComponent {
  envs = environment;
}
