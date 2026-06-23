import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Homes by Dakota'
  },
  {
    path: 'properties',
    loadComponent: () =>
      import('./features/properties/properties.component').then(m => m.PropertiesComponent),
    title: 'Properties | Homes by Dakota'
  },
  {
    path: 'property/:id',
    loadComponent: () =>
      import('./features/property-details/property-details.component').then(m => m.PropertyDetailsComponent),
    title: 'Property Details | Homes by Dakota'
  },
  {
    path: 'buyers',
    loadComponent: () =>
      import('./features/buyers/buyers.component').then(m => m.BuyersComponent),
    title: 'Buyers | Homes by Dakota'
  },
  {
    path: 'sellers',
    loadComponent: () =>
      import('./features/sellers/sellers.component').then(m => m.SellersComponent),
    title: 'Sellers | Homes by Dakota'
  },
  {
    path: 'neighborhoods',
    loadComponent: () =>
      import('./features/neighborhoods/neighborhoods.component').then(m => m.NeighborhoodsComponent),
    title: 'Neighborhoods | Homes by Dakota'
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'About Dakota | Homes by Dakota'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact | Homes by Dakota'
  },
];