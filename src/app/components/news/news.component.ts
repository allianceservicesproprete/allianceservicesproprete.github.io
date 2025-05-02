import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  latestNews: any;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getLatestNews().subscribe(news => {
      this.latestNews = news;
    });
  }
}
