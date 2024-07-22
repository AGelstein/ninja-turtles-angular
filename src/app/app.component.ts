import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchNameService } from './api/search-hero-name.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'ninja-turtles-app';
  data: any;

  constructor(private searchNameService: SearchNameService) {}
  subscriptions = new Subscription();

  ngOnInit(): void {
    this.subscriptions.add(
      this.searchNameService.getHeroByName('donatello').subscribe((x) => {
        console.log(x);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
