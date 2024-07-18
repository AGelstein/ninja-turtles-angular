import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchNameService } from './api/search-name.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ninja-turtles-app';
  data: any;

  constructor(private searchNameService: SearchNameService) {}

  ngOnInit(): void {
    this.searchNameService.searchName().subscribe((x) => {
      console.log();
    });
  }
}
