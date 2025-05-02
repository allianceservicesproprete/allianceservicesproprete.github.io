import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';
import { CareersComponent } from './pages/careers/careers.component';
import { CsrComponent } from './pages/csr/csr.component';
import { NewsComponent } from './pages/news/news.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms-of-use', component: TermsOfUseComponent},
  { path: 'careers', component: CareersComponent },
  { path: 'csr', component: CsrComponent },
  { path: 'csr', component: CsrComponent },
  { path: 'news', component: NewsComponent },
  //{ path: 'news/:id', component: NewsDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];