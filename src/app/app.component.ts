import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-start';
  notifications = 2;
  showSpinner = false;
  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    },5000)
  }
  opened = false;
  sidenavClick () {
    this.opened = !this.opened;
  }
  selectedTabChange(index: any) {
    console.log(index);
  }
  selectedValue: string | undefined;
}
