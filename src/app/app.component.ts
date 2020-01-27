import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'English-chat-bot';
  links = [
    { path: '/main', label: 'Home', active: 'button-active' },
    { path: '/chat', label: 'Chat', active: 'button-active' },
    { path: '/admin', label: 'admin', active: 'button-active' },
  ];
}
