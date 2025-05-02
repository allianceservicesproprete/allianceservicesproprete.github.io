import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  getArticles(): Observable<any[]> {
    return this.http.get<any[]>('/articles.json');
  }

  getLatestNews(): Observable<any> {
    return this.http.get<any[]>('/articles.json').pipe(
      map((newsArray: any[]) => newsArray.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0])
    );
  }
}
