import { Component } from '@angular/core';
import { SectorsComponent } from "../../components/sectors/sectors.component";
import { ServicesComponent } from "../../components/services/services.component";
import { KeyFiguresComponent } from "../../components/key-figures/key-figures.component";
import { NewsComponent } from "../../components/news/news.component";
import { CertificationsComponent } from "../../components/certifications/certifications.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SectorsComponent,
    ServicesComponent,
    KeyFiguresComponent,
    NewsComponent,
    CertificationsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
