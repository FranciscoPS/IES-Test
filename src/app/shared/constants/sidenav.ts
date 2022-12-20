import { IMenu } from "../models/sidenav.model";

export const SIDENAV_MENU: IMenu[] = [
  {
    icon: 'home',
    description: 'Welcome',
    path: '/welcome',
  },
  {
    icon: 'calculate',
    description: 'Conversions',
    path: '/conversions',
  },
  {
    icon: 'insert_invitation',
    description: 'Dates',
    path: '/dates',
  },
  {
    icon: 'pending_actions',
    description: 'Form',
    path: '/form',
  },
];
