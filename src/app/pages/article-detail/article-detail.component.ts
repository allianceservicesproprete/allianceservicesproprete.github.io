import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CommonModule, Location} from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss'
})
export class ArticleDetailComponent implements OnInit {
  article: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    this.http.get<any[]>('/articles.json').subscribe(data => {
      this.article = data.find(article => article.id == articleId);
    });
  }
  goBack(): void {
    this.location.back();
  }
}
