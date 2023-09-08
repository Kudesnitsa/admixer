import { Component } from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterOutlet} from "@angular/router";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './home.component.html',
  imports: [
    CommonModule,
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'test-admixer';
}
