import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ServicesComponent } from './company-services/services.component';
import { NewsComponent } from './news/news.component';
import { ConnectComponent } from './connect/connect.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'about', component: AboutComponent }, 
    { path: 'careers', component: CareersComponent }, 
    { path: 'services', component: ServicesComponent },
    { path: 'news', component: NewsComponent },
    { path: 'connect', component: ConnectComponent}
];
