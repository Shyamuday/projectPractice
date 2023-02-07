import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'proPractice';

  constructor(private http: HttpClient) {}
  throwError() {
    throw new Error('You Got An Error!!!');
  }
  //serverside
  throwHttpError() {
    this.http.get('error-handeling').subscribe();
  }
}
