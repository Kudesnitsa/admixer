import {Component} from '@angular/core';
import {NAVIGATION_LINKS} from "@shared/constants";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {NavigationLinkModel} from "@shared/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navigationLinks: NavigationLinkModel[] = NAVIGATION_LINKS;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    // Register your custom icon
    this.matIconRegistry.addSvgIcon('menu-home', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg'));
    this.matIconRegistry.addSvgIcon('menu-advertisers', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/advertisers.svg'));

  }
}
