import {AppRoutesEnum} from '@shared/enums';
import {NavigationLinkModel} from "@shared/models";

export const NAVIGATION_LINKS: NavigationLinkModel[] = [
  {
    name: 'Home',
    link: AppRoutesEnum.HOME,
    icon: 'menu-home',
  },
  {
    name: 'Advertisers',
    link: AppRoutesEnum.ADVERTISERS,
    icon: 'menu-advertisers',
  },

];

