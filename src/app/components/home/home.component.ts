import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchNameService } from '../../api/search-hero-name.service';
import { Subscription } from 'rxjs';
import { HeroDropdownComponent } from '../hero-dropdown/hero-dropdown.component';
import { HeroDetailsComponent } from '../hero-details/hero-details/hero-details.component';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroDropdownComponent, HeroDetailsComponent, AvatarComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnDestroy, OnInit {
  Title = 'Room of Really Really Strong Dudes';
  selectedName = 'donatello';

  constructor(private searchNameService: SearchNameService) {}
  subscriptions = new Subscription();

  ngOnInit(): void {
    this.subscriptions.add(
      this.searchNameService
        .getHeroByName(this.selectedName)
        .subscribe((hero) => {
          console.log(hero);
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
