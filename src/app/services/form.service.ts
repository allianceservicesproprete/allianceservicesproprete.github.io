import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private formUrl = 'https://formspree.io/f/xblogjak';

  constructor(private http: HttpClient) {}

  sendFormData(formData: any): Observable<any> {
    return this.http.post(this.formUrl, formData);
  }
}
