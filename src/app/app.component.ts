import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first-app';
  array: string[] = [];
  insert(txt: any) {
    this.array.push(txt);
  }
  delete(i: any) {
    i = this.array.indexOf(i);
    console.log(i);
    this.array.splice(i, 1);
  }
}
