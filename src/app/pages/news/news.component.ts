import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  articles: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getArticles().subscribe(
      (data) => {
        this.articles = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des articles:', error);
      }
    );
  }
}
