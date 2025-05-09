import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [ ]
})
export class AppComponent {
  title = 'AbidaPortfolio';
routes = ['/profile', '/about', '/project', '/contact'];
  currentIndex = 0;

  constructor(private router: Router) {   }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.currentIndex = this.routes.indexOf(url);
      }
    });
  }

}
