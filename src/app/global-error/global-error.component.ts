import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss'],
})
export class GlobalErrorComponent {
  constructor(private http: HttpClient) {}
  throwError() {
    throw new Error('You Got An Error!!!');
  }
  //serverside
  throwHttpError() {
    this.http.get('error-handling').subscribe((res) => {
      console.log(res);
    });
  }
}
