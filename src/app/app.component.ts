import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  themeLight: boolean = true

  toggleTheme(){
    this.themeLight = !this.themeLight
    document.body.classList.toggle("dark-theme")
  }
}
