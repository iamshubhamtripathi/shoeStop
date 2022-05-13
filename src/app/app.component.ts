import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobile_menu_2 = true;

  setMobile(){
    this.mobile_menu_2 = !this.mobile_menu_2;
  }
}
