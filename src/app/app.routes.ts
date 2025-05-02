import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';
import { CareersComponent } from './pages/careers/careers.component';
import { CsrComponent } from './pages/csr/csr.component';
import { NewsComponent } from './pages/news/news.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { QuoteComponent } from './pages/quote/quote.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms-of-use', component: TermsOfUseComponent},
  { path: 'careers', component: CareersComponent },
  { path: 'csr', component: CsrComponent },
  { path: 'csr', component: CsrComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component:ArticleDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];